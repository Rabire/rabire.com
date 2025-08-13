"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const RotatingImages = ({ images, alt }: { images: string[]; alt: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1600);
    return () => clearInterval(id);
  }, [images]);

  return (
    <div className="relative h-24 aspect-square shrink-0 rounded-lg bg-muted overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src + i}
          src={src}
          alt={alt}
          fill
          sizes="96px"
          className={`object-contain p-2 transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
    </div>
  );
};

export default RotatingImages;
