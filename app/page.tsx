"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative md:w-[50%]">
        {!isOpen && (
          <p
            style={{ fontFamily: '"altesse-std-24pt", sans-serif', fontWeight: 400 }}
            className="absolute left-1/2 top-[23%] z-10 -translate-x-1/2 text-5xl"
          >
            Introducing...
          </p>
        )}
        <img
          src={isOpen ? "/images/open.png" : "/images/closed.png"}
          alt={isOpen ? "Open invitation" : "Closed invitation"}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full cursor-pointer transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
