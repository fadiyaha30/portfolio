"use client";

import { useEffect } from "react";

export default function HydrationComplete() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      window.dispatchEvent(new Event("faya:hydrated"));
    }
  }, []);

  return null;
}
