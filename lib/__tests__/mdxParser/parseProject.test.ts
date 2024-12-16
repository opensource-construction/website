import { expect, it, describe } from "vitest";
import { contentDefaults } from "@/lib/mdxParser/mdxSchematas";
import { ZodError } from "zod";
import { OscProject } from "@/lib/mdxParser/mdxSchematas";
import { mapContent } from "@/lib/mdxParser/mdxMappers";

describe('validateProject', () => {
  const defaultContent = contentDefaults.project as OscProject;
  const validSlug = 'test-project';
  const validContent = '# Test Content';

  it('should validate a correct project', () => {
    const rawData = {
      title: 'Project Title',
      description: 'Revolutionizes AEC',
      metadata: { featured: false, maturity: 'graduated' },
      links: [
        { url: 'https://speckle.systems/', label: 'Website' },
      ]
    }

    const result = mapContent("project", rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      type: 'project',
      title: 'Project Title',
      description: 'Revolutionizes AEC',
      slug: validSlug,
      content: validContent,
      metadata: {
        featured: false,
        maturity: 'graduated',
        links: [
          {
            url: 'https://speckle.systems/',
            label: 'Website'
          }
        ]
      }
    });
  });

  it('should use default values for missing fields', () => {
    const rawData = {
      title: 'Test Project'
    };

    const result = mapContent("project", rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      title: 'Test Project',
      slug: validSlug,
      content: validContent,
      metadata: {
        featured: false,
        maturity: 'sandbox',
        links: []
      }
    });
  });

  it('should handle invalid maturity value', () => {
    const rawData = {
      title: 'Test Project',
      metadata: {
        maturity: 'invalid-maturity'
      }
    };

    const result = mapContent("project", rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      title: 'Test Project',
      slug: validSlug,
      content: validContent
    });
  });

  it('should handle invalid URL in links', () => {
    const rawData = {
      links: [
        { url: 'falsy link', label: 'Website' },
      ],
    };

    expect(() => {
      const result = mapContent("project", rawData, validSlug, validContent, defaultContent);
    }).toThrowError(ZodError);
  });

  it('should handle null or undefined input', () => {
    const result = mapContent("project", null, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      slug: validSlug,
      content: validContent
    });
  });
});