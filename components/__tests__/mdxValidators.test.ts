import { test, expect } from "vitest";
import { Training } from "../src/mdxParser/mdxParserTypes";
import { validateTraining } from "../src/mdxParser/mdxValidators";

const defaultTraining: Training = {
  type: "training",
  title: "Default Title",
  description: "Default Description",
  slug: "default-slug",
  content: "Default Content",
  author: "",
  image: "",
  links: [],
  tags: [],
  metadata: {
    level: "beginner",
    duration: "1h",
  },
};

test("validateTraining with complete raw data", () => {
  const raw = {
    title: "Custom Title",
    description: "Custom Description",
    author: "Author Name",
    image: "image-url",
    links: ["link1", "link2"],
    tags: ["tag1", "tag2"],
    metadata: {
      level: "advanced",
      duration: "2h",
    },
  };
  const result = validateTraining(
    raw,
    "custom-slug",
    "Custom Content",
    defaultTraining,
  );
  expect(result).toEqual({
    type: "training",
    title: "Custom Title",
    description: "Custom Description",
    slug: "custom-slug",
    content: "Custom Content",
    author: "Author Name",
    image: "image-url",
    links: ["link1", "link2"],
    tags: ["tag1", "tag2"],
    metadata: {
      level: "advanced",
      duration: "2h",
    },
  });
});

test("validateTraining with partial raw data", () => {
  const raw = {
    title: "Partial Title",
    metadata: {
      level: "intermediate",
    },
  };
  const result = validateTraining(
    raw,
    "partial-slug",
    "Partial Content",
    defaultTraining,
  );
  expect(result).toEqual({
    type: "training",
    title: "Partial Title",
    description: "Default Description",
    slug: "partial-slug",
    content: "Partial Content",
    author: "",
    image: "",
    links: [],
    tags: [],
    metadata: {
      level: "intermediate",
      duration: "1h",
    },
  });
});

test("validateTraining with empty raw data", () => {
  const raw = {};
  const result = validateTraining(
    raw,
    "empty-slug",
    "Empty Content",
    defaultTraining,
  );
  expect(result).toEqual({
    type: "training",
    title: "Default Title",
    description: "Default Description",
    slug: "empty-slug",
    content: "Empty Content",
    author: "",
    image: "",
    links: [],
    tags: [],
    metadata: {
      level: "beginner",
      duration: "1h",
    },
  });
});
