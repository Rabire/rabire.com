"use client";

import AOS, { type AosOptions } from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type AOSProviderProps = {
  options?: AosOptions;
};

export default function AOSProvider({ options }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 550,
      easing: "ease-out-cubic",
      once: true,
      ...options,
    });

    const handleResize = () => {
      AOS.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [options]);

  return null;
}
