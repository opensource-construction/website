import { mapContent } from "@/lib/mdxParser/mdxMappers";
import { contentDefaults, OscEvent } from "@/lib/mdxParser/mdxSchema";
import { describe, expect, it } from "vitest";

describe("validateEvent", () => {
  const validSlug = "test-event";
  const validContent = "# Test Content";
  const defaultContent = contentDefaults.project as OscEvent;
  const testDate = new Date("2024-04-23T16:00:00+01:00");

  it("should validate a correct event", () => {
    const rawData = {
      title: "Open Source in AEC – Copenhagen Event",
      event: {
        start: "2024-04-23T16:00:00+01:00",
        duration: { hours: 2 },
        location: "Bloxhub, Bryghuspladsen 8, 1473 Copenhagen",
        geo: { lon: 55.672104, lat: 12.578912 },
        url: "https://bloxhub.org/event/open-source-in-aec/",
        status: "CONFIRMED",
        organizer: {
          name: "Bloxhub",
          email: "info@bloxhub.org",
          dir: "https://bloxhub.org",
        },
      },
      links: [
        {
          url: "https://bloxhub.org",
          label: "Event Website",
        },
      ],
    };

    const result = mapContent(
      "event",
      rawData,
      validSlug,
      validContent,
      defaultContent,
    );

    expect(result).toEqual({
      type: "event",
      title: "Open Source in AEC – Copenhagen Event",
      slug: validSlug,
      content: validContent,
      description: undefined,

      metadata: {
        start: testDate,
        isPast: true,
        duration: { hours: 2 },
        location: "Bloxhub, Bryghuspladsen 8, 1473 Copenhagen",
        geo: {
          lat: 12.578912,
          lon: 55.672104,
        },
        status: "CONFIRMED",
        organizer: {
          name: "Bloxhub",
          email: "info@bloxhub.org",
        },
        url: "https://bloxhub.org/event/open-source-in-aec/",
        links: [{ url: "https://bloxhub.org", label: "Event Website" }],
      },
    });
  });

  it("should assign is past correctly"),
    () => {
      const pastDate = "2024-04-23T16:00:00+01:00";
      const future = "2025-04-23T16:00:00+01:00";

      const result = mapContent(
        "event",
        { event: { start: pastDate } },
        validSlug,
        validContent,
        defaultContent,
      );

      const futureResult = mapContent(
        "event",
        { event: { start: future } },
        validSlug,
        validContent,
        defaultContent,
      );

      expect(result.metadata.isPast).toBe(true);
      expect(futureResult.metadata.isPast).toBe(false);
    };

  it("should handle missing optional fields", () => {
    const result = mapContent(
      "event",
      {
        title: "Minimal Event",
        event: {
          start: testDate,
        },
      },
      validSlug,
      validContent,
      defaultContent,
    );

    expect(result.metadata.status).toBe("TENTATIVE");
    expect(result.metadata.duration).toBeUndefined();
    expect(result.metadata.location).toBeUndefined();
    expect(result.metadata.organizer).toBeUndefined();
  });

  it("should validate complex duration objects", () => {
    const result = mapContent(
      "event",
      {
        event: {
          start: testDate,
          duration: {
            days: 2,
            hours: 3,
            minutes: 30,
          },
        },
      },
      validSlug,
      validContent,
      defaultContent,
    );

    expect(result.metadata.duration).toEqual({
      days: 2,
      hours: 3,
      minutes: 30,
    });
  });

  it("should handle invalid organizer data", () => {
    const result = mapContent(
      "event",
      {
        event: {
          start: testDate,
          organizer: {
            name: "Test",
            email: "not-an-email",
          },
        },
      },
      validSlug,
      validContent,
      defaultContent,
    );

    expect(result.metadata.organizer?.email).toBeUndefined();
  });

  it("should validate geo coordinates", () => {
    const result = mapContent(
      "event",
      {
        event: {
          start: testDate,
          geo: {
            lat: 91, // Invalid latitude
            lon: 180,
          },
        },
      },
      validSlug,
      validContent,
      defaultContent,
    );

    expect(result.metadata.geo).toEqual({
      lat: 91,
      lon: 180,
    });
  });

  it("should handle different timezone formats", () => {
    const dates = [
      "2024-04-23T16:00:00+01:00",
      "2024-04-23T15:00:00Z",
      "2024-04-23T17:00:00+02:00",
    ];

    const results = dates.map((date) =>
      mapContent(
        "event",
        { event: { start: date } },
        validSlug,
        validContent,
        defaultContent,
      ),
    );

    // All should represent the same time
    const times = results.map((r) => r.metadata.start.getTime());
    expect(new Set(times).size).toBe(1);
  });

  it("should validate status transitions", () => {
    const statuses = ["TENTATIVE", "invalid", "CONFIRMED", "CANCELLED"];

    const results = statuses.map((status) =>
      mapContent(
        "event",
        {
          event: {
            start: testDate,
            status,
          },
        },
        validSlug,
        validContent,
        defaultContent,
      ),
    );

    expect(results[0].metadata.status).toBe("TENTATIVE");
    expect(results[1].metadata.status).toBe("TENTATIVE");
    expect(results[2].metadata.status).toBe("CONFIRMED");
    expect(results[3].metadata.status).toBe("CANCELLED");
  });
});
