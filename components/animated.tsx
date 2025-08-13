"use client";

import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type AnimatedProps = {
  children: ReactNode;
  dir?: Direction;
  delay?: number;
};

function toAOS(dir: Direction): string {
  switch (dir) {
    case "down":
      return "fade-down";
    case "left":
      return "fade-left";
    case "right":
      return "fade-right";
    case "up":
    default:
      return "fade-up";
  }
}

export default function Animated({
  children,
  dir = "up",
  delay,
}: AnimatedProps) {
  const dataAos = toAOS(dir);
  const delayProps =
    typeof delay === "number" ? { "data-aos-delay": delay } : {};
  return (
    <div data-aos={dataAos} {...delayProps}>
      {children}
    </div>
  );
}
