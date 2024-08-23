"use client";
import { init, push } from "@socialgouv/matomo-next";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

// matomo-next does not (yet) support next's app router natively
// details see https://github.com/SocialGouv/matomo-next/issues/99
// hence we do some manual setup and event tracking in a small wrapper
// loosely based on https://github.com/betagouv/reno/blob/master/utils/Matomo.tsx

const MATOMO_URL =
  process.env.NEXT_PUBLIC_MATOMO_URL || "https://app.friendlyanalytics.ch";
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || undefined;

const FriendlyComponent = () => {
  const pathname = usePathname(),
    searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID ?? "" });
    return () => push(["HeatmapSessionRecording::disable"]);
  }, []);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
    } else {
      if (pathname) {
        const url =
          pathname + (searchParamsString ? "?" + searchParamsString : "");
        push(["setCustomUrl", pathname]);
        push(["disableCookies"]);
        push(["trackPageView"]);
      }
    }
  }, [pathname, searchParamsString]);

  return null;
};

export default function Friendly() {
  return (
    <Suspense>
      <FriendlyComponent />
    </Suspense>
  );
}
