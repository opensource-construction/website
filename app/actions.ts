"use server";

import { z } from "zod";

export async function saveForm(route: string, formData: FormData) {
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
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(route, validatedFields);
}
