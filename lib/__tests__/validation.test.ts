import { test, expect, it, describe } from "vitest";
import { OscProject } from "@lib/mdxParser/mdxParserTypes";
import { validateProject } from "@lib/mdxParser/mdxValidators";
import { contentDefaults } from "@lib/mdxParser/mdxSchematas";


describe('validateProject', () => {
  const defaultContent = contentDefaults.project as OscProject;
  const validSlug = 'test-project';
  const validContent = '# Test Content';

  it('should validate a correct project', () => {
    const rawData = {
      title: 'Test Project',
      description: 'Test Description',
      metadata: {
        featured: true,
        maturity: 'sandbox',
        links: [
          {
            url: 'https://example.com',
            label: 'Example'
          }
        ]
      }
    };

    const result = validateProject(rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      type: 'project',
      title: 'Test Project',
      description: 'Test Description',
      slug: validSlug,
      content: validContent,
      metadata: {
        featured: true,
        maturity: 'sandbox',
        links: [
          {
            url: 'https://example.com',
            label: 'Example'
          }
        ]
      }
    });
  });

  it('should use default values for missing fields', () => {
    const rawData = {
      title: 'Test Project'
    };

    const result = validateProject(rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      title: 'Test Project',
      slug: validSlug,
      content: validContent
    });
  });

  it('should handle invalid maturity value', () => {
    const rawData = {
      title: 'Test Project',
      metadata: {
        maturity: 'invalid-maturity'
      }
    };

    const result = validateProject(rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      slug: validSlug,
      content: validContent
    });
  });

  it('should handle invalid URL in links', () => {
    const rawData = {
      title: 'Test Project',
      metadata: {
        links: [
          {
            url: 'not-a-url',
            label: 'Invalid URL'
          }
        ]
      }
    };

    const result = validateProject(rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      slug: validSlug,
      content: validContent
    });
  });

  it('should handle null or undefined input', () => {
    const result = validateProject(null, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      slug: validSlug,
      content: validContent
    });
  });
});