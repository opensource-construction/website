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
    email: z
      .string({
        invalid_type_error: "Invalid Email",
      })
      .email()
      .max(35),
    organisation: z
      .string({
        invalid_type_error: "Invalid Organisation",
      })
      .min(2)
      .max(25)
      .trim(),
  });

  const validatedFields = schema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    organisation: formData.get("organisation"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(route, validatedFields);
}
