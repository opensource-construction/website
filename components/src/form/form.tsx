"use client";

import { TextField } from "../text-field";
import { CheckboxField } from "../checkbox-field";
import { Button } from "../button";

export function Form({ action }: React.HTMLProps<"form">) {
  return (
    <form action={action ? action : undefined}>
      <div className="flex flex-col">
        <TextField label="Firstname" placeholder="John" variant="required" />
        <TextField label="Lastname" placeholder="Doe" variant="required" />
        <TextField
          type="email"
          label="E-Mail"
          placeholder="john.doe@example.com"
          variant="required"
        />
        <TextField
          type="text"
          label="Organisation / Company"
          placeholder="ACME Inc"
        />
        <TextField type="text" label="Message" sizeClass="medium" />
        <CheckboxField
          name="accept-toc"
          label="I agree to the privacy agreement"
        />
        <Button type="submit" label="Register now" />
      </div>
    </form>
  );
}
