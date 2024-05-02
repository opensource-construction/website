import { NextResponse } from "next/server";
import { createEvents, EventAttributes, ReturnObject } from "ics";
import { getPosts } from "@opensource-construction/components";

const namespace = "events";

export async function GET(request: Request) {
  const newHeaders = new Headers(request.headers);
  newHeaders.set("Content-Type", "text/Calendar");
  newHeaders.set(
    "Content-Disposition",
    "inline; filename=opensource-construction.ics",
  );

  let events = getPosts(namespace).map((e) => {
    let event = e.metadata.event;
    event.title = e.metadata.title;
    event.start = new Date(e.metadata.event.start).getTime();
    event.calName = "opensource.construction";
    event.url = `https://opensource.construction/events/${e.slug}`;
    event.uid = `${e.slug}@opensource.construction`;
    return event;
  });
  let { error, value } = createIcsCalendarFromEvents(
    events as EventAttributes[],
  );
  if (error) {
    throw new Error(`Calendar couldn't be created: ${error.name}`);
  }
  return new NextResponse(value, { headers: newHeaders });
}

function createIcsCalendarFromEvents(events: EventAttributes[]): ReturnObject {
  return createEvents(events);
}
