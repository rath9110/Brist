"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function TrackPageView() {
  useEffect(() => {
    trackEvent("page_view");
  }, []);
  return null;
}
