import { z } from "zod";
import { ReactNode } from "react";

export function Form({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) {
  async function saveForm(route: string, formData: FormData) {
    "use server";

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

  const saveFormWithRoute = saveForm.bind(null, route);

  return (
    <form action={saveFormWithRoute}>
      <div className="flex flex-col font-bold">
        <input
          name="firstname"
          id="firstname"
          type="text"
          placeholder="Firstname*"
          required
          className="mt-4 rounded-md border-gray-300 bg-gray-100 p-5 placeholder:text-gray-400 focus:placeholder:text-gray-200"
        />
        <input
          name="lastname"
          id="lastname"
          type="text"
          placeholder="Lastname*"
          required
          className="mt-4 rounded-md border-gray-300 bg-gray-100 p-5 placeholder:text-gray-400 focus:placeholder:text-gray-200"
        />
        <input
          name="email"
          id="email"
          type="email"
          placeholder="E-Mail*"
          required
          className="mt-4 rounded-md border-gray-300 bg-gray-100 p-5 placeholder:text-gray-400 focus:placeholder:text-gray-200"
        />
        <input
          name="organisation"
          id="organisation"
          type="text"
          placeholder="Organisation / Company"
          className="mt-4 rounded-md border-gray-300 bg-gray-100 p-5 placeholder:text-gray-400 focus:placeholder:text-gray-200"
        />
        {children}
        <div className="flex">
          <input
            id="accept-toc"
            name="accept-toc"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="accept-toc"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            I agree to the privacy agreement
          </label>
        </div>
        <input type="submit" value="Register now" />
      </div>
    </form>
  );
}
