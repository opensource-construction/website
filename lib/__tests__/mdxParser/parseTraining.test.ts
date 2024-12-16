import { describe, it, expect } from 'vitest';
import { mapContent } from '@lib/mdxParser/mdxMappers';
import { contentDefaults } from "@/lib/mdxParser/mdxSchematas";
import { OscTraining } from '@lib/mdxParser/mdxSchematas';

describe('mapTraining', () => {
  const validSlug = 'test-training';
  const validContent = '# Test Content';
  const defaultContent = contentDefaults.training as OscTraining;

  it('should map valid training data correctly', () => {
    const rawData = {
      title: "test-training",
      description: 'Use Python',
      author: 'Christian Kongsgaard',
      image: '/images/trainings/okobau_api.png',
      links: [{ url: 'https://okobau.kongsgaard.eu/', label: 'Website' }],
      tags: ['type::coding', 'tool::python', 'cost::paid', 'mode::online']
    }

    const result = mapContent("training", rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      type: 'training',
      title: 'test-training',
      description: 'Use Python',
      slug: validSlug,
      content: validContent,
      metadata: {
        author: 'Christian Kongsgaard',
        image: '/images/trainings/okobau_api.png',
        tags: ['type::coding', 'tool::python', 'cost::paid', 'mode::online'],
        links: [
          { url: 'https://okobau.kongsgaard.eu/', label: 'Website' }
        ]
      }
    });
  });

  it('should use default values for missing fields', () => {
    const rawData = {
      title: 'Minimal Training'
    };

    const result = mapContent("training", rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      title: 'Minimal Training',
      slug: validSlug,
      content: validContent
    });
  });

  it('should throw error for invalid tag format', () => {
    const rawData = {
      title: 'Invalid Tags',
      tags: ['invalid-tag-format']
    };

    const result = mapContent("training", rawData, validSlug, validContent, defaultContent);

    expect(result.metadata.tags).toEqual([]);
  });

  it('should throw error for invalid URL in links', () => {
    const rawData = {
      title: 'Invalid URL',
      links: [
        { url: 'invalid-url', label: 'Website' }
      ]
    };

    expect(() =>
      mapContent("training", rawData, validSlug, validContent, defaultContent)
    ).toThrow();
  });

  it('should handle empty arrays for tags and links', () => {
    const rawData = {
      title: 'Empty Arrays',
      tags: [],
      links: []
    };

    const result = mapContent("training", rawData, validSlug, validContent, defaultContent);

    expect(result.metadata.tags).toEqual([]);
    expect(result.metadata.links).toEqual([]);
  });

  it('should handle null or undefined input', () => {
    const result = mapContent("training", null, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      ...defaultContent,
      slug: validSlug,
      content: validContent
    });
  });

  it('should maintain valid tag categories', () => {
    const rawData = {
      title: 'Valid Tags',
      tags: [
        'type::workshop',
        'tool::revit',
        'cost::free',
        'mode::hybrid'
      ]
    };

    const result = mapContent("training", rawData, validSlug, validContent, defaultContent);

    expect(result.metadata.tags).toEqual([
      'type::workshop',
      'tool::revit',
      'cost::free',
      'mode::hybrid'
    ]);
  });

});