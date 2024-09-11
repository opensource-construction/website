"use client";

import { useEffect, createRef } from "react";
import { useFormState } from "react-dom";
import { saveForm, type Status } from "@/app/actions";

import { TextField } from "../text-field";
import { CheckboxField } from "../checkbox-field";
import { Button } from "../button";

export function Form() {
  const ref = createRef<HTMLFormElement>();
  const initialState = { type: "default" } as Status;
  const [state, formAction] = useFormState(saveForm, initialState);

  useEffect(() => {
    if (state.type === "success") {
      ref.current?.reset();
    }
  }, [state.type, ref]);

  return (
    <form action={formAction} ref={ref}>
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
          required={true}
        />
        <div className="flex flex-col gap-4 text-sm md:flex-row md:text-base">
          <Button type="submit" label="Register now" />
          <div className="mt-4 flex-grow">
            {state.type === "success" ? (
              <p
                aria-live="polite"
                className="m-0 bg-secondary-500 px-8 py-3 font-bold leading-6 text-white"
              >
                Success. Thank you for your interest.
              </p>
            ) : null}
            {state.type === "error" ? (
              <p
                aria-live="polite"
                className="m-0 bg-warning-500 px-8 py-3 font-bold leading-6 text-white"
              >
                Sorry, something went wrong. Please try again.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  );
}
