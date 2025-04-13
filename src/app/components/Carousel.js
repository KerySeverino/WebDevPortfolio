"use client";
import Image from "next/image";
import { useState } from "react";

export default function CertificatesCarousel({ title, images }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl mb-4 text-center">{title}</h2>
      <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={400}
          height={400}
          className="object-contain mx-auto transition duration-300 hover:scale-110"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-indigo-500 p-2 rounded-full hover:bg-indigo-600"
        >⬅</button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-indigo-500 p-2 rounded-full hover:bg-indigo-600"
        >➡</button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-indigo-600" : "bg-gray-300"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}