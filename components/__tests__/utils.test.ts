import { test, expect } from "vitest";
import { parseSlug } from "../src/mdxParser/mdxParsers";

test("parses basic slug correctly", () => {
  expect(parseSlug("simple")).toBe("simple");
  expect(parseSlug("1234")).toBe("1234");
});

test("parses multi component slug correctly", () => {
  expect(parseSlug("multi-component")).toBe("multi-component");
  expect(parseSlug("multi_component")).toBe("multi_component");
});

test("parses number and basic slug correctly", () => {
  expect(parseSlug("01-component")).toBe("component");
  expect(parseSlug("21-component")).toBe("component");
});

test("parses number and multi component slug correctly", () => {
  expect(parseSlug("01-multi-component")).toBe("multi-component");
  expect(parseSlug("21-multi-component")).toBe("multi-component");
});

test("parses date and basic slug correctly", () => {
  expect(parseSlug("20240410-component")).toBe("component");
});
