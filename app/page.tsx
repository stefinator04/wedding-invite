"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative md:w-[50%]">
        {!isOpen && (
          <>
            <p
              style={{ fontFamily: '"altesse-std-24pt", sans-serif', fontWeight: 400 }}
              className="absolute left-26/50 top-[21%] z-10 -translate-x-1/2 text-[clamp(2.5rem,6vw,3.5rem)]"
            >
              <span className="inline-block animate-float">Introducing...</span>
            </p>
            <img
              src="/images/flowerbranch.png"
              alt="Flower branch left"
              className="pointer-events-none absolute left-[13%] top-58/100 z-10 w-38/100 -translate-y-1/2"
            />
            <img
              src="/images/flowerbranch.png"
              alt="Flower branch right"
              className="pointer-events-none absolute right-[13%] top-59/100 -z-10 w-38/100 -translate-y-8/10 -scale-x-100"
            />
          </>
        )}
        <img
          src="/images/closed.png"
          alt="Closed invitation"
          onClick={() => setIsOpen(true)}
          className={`w-full cursor-pointer transition-all duration-700 ease-in-out ${isOpen ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}
        />
        <img
          src="/images/open.png"
          alt="Open invitation"
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 w-full cursor-pointer transition-all duration-700 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
        />
        {!isOpen && (
          <p
            style={{ fontFamily: '"worthington-arcade", serif', fontWeight: 400 }}
            className="absolute bottom-[27%] left-1/2 z-10 -translate-x-1/2 text-[clamp(0.75rem,2vw,1.125rem)]"
          >
            CLICK TO OPEN
          </p>
        )}
      </div>
    </div>
  );
}
