"use client";

import { useState, useEffect, createRef, FormEvent } from "react";
import { saveForm, type Status } from "@/app/actions";
import { TextField } from "../text-field";
import { CheckboxField } from "../checkbox-field";
import { Button } from "../button";

export function Form() {
  const ref = createRef<HTMLFormElement>();
  const [state, setState] = useState<Status>({ type: "default" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (state.type === "success") {
      ref.current?.reset();
    }
  }, [state.type, ref]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const result = await saveForm(state, formData);
      setState(result);
    } catch (error) {
      console.error("Form submission error:", error);
      setState({ type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={ref}>
      <div className="flex flex-col">
        <TextField
          name="firstname"
          label="Firstname"
          placeholder="John"
          variant="required"
        />
        <TextField
          name="lastname"
          label="Lastname"
          placeholder="Doe"
          variant="required"
        />
        <TextField
          name="email"
          type="email"
          label="E-Mail"
          placeholder="john.doe@example.com"
          variant="required"
        />
        <TextField
          name="organisation"
          type="text"
          label="Organisation / Company"
          placeholder="ACME Inc"
        />
        <TextField
          name="message"
          type="text"
          label="Message"
          sizeClass="medium"
        />
        <CheckboxField
          name="accept-toc"
          label="I agree to the privacy agreement"
          required={true}
        />
        <div className="flex flex-col gap-4 text-sm md:flex-row md:text-base">
          <Button
            type="submit"
            label={isSubmitting ? "Submitting..." : "Register now"}
            disabled={isSubmitting}
          />
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
