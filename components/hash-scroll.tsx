"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(hash: string) {
  if (!hash) return;

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const doScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      // ✅ wait for DOM paint + client components before scrolling
      requestAnimationFrame(() => {
        window.setTimeout(() => {
          scrollToHash(hash);
        }, 80);
      });
    };

    // ✅ on initial load, e.g. /contact#briefing
    doScroll();

    // ✅ if hash changes while staying on the same page
    const onHashChange = () => {
      doScroll();
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}