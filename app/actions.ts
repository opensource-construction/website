"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { z } from "zod";

export type Status = {
  type: "default" | "loading" | "success" | "error";
  errors?: object;
};

export async function saveForm(previousState: Status, formData: FormData) {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });

  const documentId = process.env.GOOGLE_DOCUMENT_ID || "";
  const sheetId = process.env.GOOGLE_SHEET_ID || 0;
  const document = new GoogleSpreadsheet(documentId, serviceAccountAuth);
  await document.loadInfo();
  const sheet = document.sheetsById[+sheetId];

  console.log(formData);
  const schema = z.object({
    firstname: z
      .string({
        invalid_type_error: "Invalid Firstname",
      })
      .min(2)
      .max(25)
      .trim(),
    lastname: z
      .string({
        invalid_type_error: "Invalid Lastname",
      })
      .min(2)
      .max(25)
      .trim(),
    "e-mail": z.string().email({ message: "Invalid Email" }),
    "organisation-company": z.optional(
      z
        .string({
          invalid_type_error: "Invalid Organisation",
        })
        .max(25)
        .trim(),
    ),
    message: z.optional(z.string().trim()),
    "accept-toc": z.boolean(),
  });

  const validatedFields = schema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    "e-mail": formData.get("e-mail"),
    "organisation-company": formData.get("organisation-company"),
    message: formData.get("message"),
    "accept-toc": formData.get("accept-toc") === "on",
  });

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    previousState.type = "error";
  }

  await sheet.addRow({
    created_at: new Date(),
    route: "/", //route,
    ...validatedFields.data,
  });

  previousState.type = "success";

  return previousState;
}
