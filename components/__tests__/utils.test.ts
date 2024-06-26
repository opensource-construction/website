import { test, expect } from "vitest";
import { parseSlug } from "../src/utils";

/**
 * Parses a slug and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses basic slug correctly", () => {
  expect(parseSlug("simple")).toBe("simple");
  expect(parseSlug("1234")).toBe("1234");
});

/**
 * Parses a multi-component slug and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses multi component slug correctly", () => {
  expect(parseSlug("multi-component")).toBe("multi-component");
  expect(parseSlug("multi_component")).toBe("multi_component");
});

/**
 * Parses a number and basic slug and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses number and basic slug correctly", () => {
  expect(parseSlug("01-component")).toBe("component");
  expect(parseSlug("21-component")).toBe("component");
});

/**
 * Parses a number and multi-component slug and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses number and multi component slug correctly", () => {
  expect(parseSlug("01-multi-component")).toBe("multi-component");
  expect(parseSlug("21-multi-component")).toBe("multi-component");
});

/**
 * Parses a date and basic slug and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses date and basic slug correctly", () => {
  expect(parseSlug("20240410-component")).toBe("component");
});
/**
 * Parses a slug with special characters and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses slug with special characters correctly", () => {
  expect(parseSlug("special-characters!@#$%^&*()")).toBe("special-characters");
  expect(parseSlug("slug_with_underscores")).toBe("slug_with_underscores");
});

/**
 * Parses a slug with uppercase letters and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses slug with uppercase letters correctly", () => {
  expect(parseSlug("UpperCaseSlug")).toBe("uppercaseslug");
  expect(parseSlug("MixedCaseSlug")).toBe("mixedcaseslug");
});

/**
 * Parses a slug with leading and trailing spaces and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses slug with leading and trailing spaces correctly", () => {
  expect(parseSlug("  leading-space")).toBe("leading-space");
  expect(parseSlug("trailing-space  ")).toBe("trailing-space");
});

/**
 * Parses an empty slug and returns an empty string.
 * @param slug - The slug to be parsed.
 * @returns An empty string.
 */
test("parses empty slug correctly", () => {
  expect(parseSlug("")).toBe("");
});

/**
 * Parses a slug with multiple hyphens and returns the parsed value.
 * @param slug - The slug to be parsed.
 * @returns The parsed value of the slug.
 */
test("parses slug with multiple hyphens correctly", () => {
  expect(parseSlug("multiple---hyphens")).toBe("multiple-hyphens");
  expect(parseSlug("more----hyphens")).toBe("more-hyphens");
});
