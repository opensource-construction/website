import { mapContent } from "@/lib/mdxParser/mdxMappers";
import { contentDefaults, OscEvent } from "@/lib/mdxParser/mdxSchematas";
import { linkSync } from "fs";
import { describe, expect, it } from "vitest"



describe('validateEvent', () => {
  const validSlug = 'test-event';
  const validContent = '# Test Content';
  const defaultContent = contentDefaults.project as OscEvent;
  const testDate = new Date('2024-04-23T16:00:00+01:00');


  it('should validate a correct event', () => {
    const rawData = {
      title: 'Open Source in AEC – Copenhagen Event',
      event: {
        start: '2024-04-23T16:00:00+01:00',
        duration: { hours: 2 },
        location: 'Bloxhub, Bryghuspladsen 8, 1473 Copenhagen',
        geo: { lon: 55.672104, lat: 12.578912 },
        url: 'https://bloxhub.org/event/open-source-in-aec/',
        status: 'CONFIRMED',
        organizer: {
          name: 'Bloxhub',
          email: 'info@bloxhub.org',
          dir: 'https://bloxhub.org'
        }

      },
      links: [
        {
          url: 'https://bloxhub.org',
          label: 'Event Website'
        }]
    }

    const result = mapContent("event", rawData, validSlug, validContent, defaultContent);

    expect(result).toEqual({
      type: 'event',
      title: 'Open Source in AEC – Copenhagen Event',
      slug: validSlug,
      content: validContent,
      description: '',

      metadata: {
        start: testDate,
        isPast: true,
        duration: { hours: 2 },
        location: 'Bloxhub, Bryghuspladsen 8, 1473 Copenhagen',
        geo: {
          lat: 12.578912,
          lon: 55.672104
        },
        status: 'CONFIRMED',
        organizer: {
          name: 'Bloxhub',
          email: 'info@bloxhub.org'
        },
        url: 'https://bloxhub.org/event/open-source-in-aec/',
        links: [
          { url: 'https://bloxhub.org', label: 'Event Website' }
        ]
      }
    });
  })
}
)

