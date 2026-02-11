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
        <img
          src="/images/flowerbranch.png"
          alt="Flower branch open"
          style={{ transitionDelay: isOpen ? "150ms" : "0ms" }}
          className={`pointer-events-none absolute left-[51%] top-[40%] z-[6] w-[35%] -scale-x-100 -rotate-[30deg] transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
        <img
          src="/images/roses.png"
          alt="Roses"
          style={{ transitionDelay: isOpen ? "350ms" : "0ms" }}
          className={`pointer-events-none absolute left-[8%] top-[61%] z-[11] w-[28%] transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
          className={`absolute left-[6%] top-[75%] w-[57%] transition-all duration-700 ease-in-out ${isOpen ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        >
          <img src="/images/invite.png" alt="Invitation" className="w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <p
              style={{ fontFamily: '"worthington-arcade", serif', fontWeight: 400 }}
              className="text-[clamp(0.7rem,2.2vw,1.3rem)] leading-tight"
            >
              PLEASE JOIN US FOR
              <br />
              THE WEDDING OF:
            </p>
            <p
              style={{ fontFamily: '"Wedding Script", serif', fontWeight: 400 }}
              className="mt-5 text-[clamp(2.5rem,10vw,3rem)] leading-[0.7]"
            >
              Ethan
              <br />
              &
              <br />
              Stephanie
            </p>
          </div>
        </div>
        <div
          style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
          className={`absolute right-[6%] top-[63%] z-10 w-[56%] transition-all duration-700 ease-in-out ${isOpen ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        >
          <img src="/images/location.png" alt="Location" className="w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#690d05]">
            <p
              style={{ fontFamily: '"grand-central", serif', fontWeight: 300 }}
              className="text-[clamp(2.5rem,5vw,3.2rem)] leading-none"
            >
              19
            </p>
            <p
              style={{ fontFamily: '"Wedding Script", serif', fontWeight: 400 }}
              className="text-[clamp(2.7rem,5.5vw,3.8rem)] leading-none"
            >
              September
            </p>
            <p
              style={{ fontFamily: '"grand-central", serif', fontWeight: 300 }}
              className="text-[clamp(2.5rem,5vw,3.2rem)] leading-none"
            >
              2026
            </p>
            <p
              style={{ fontFamily: '"worthington-arcade", serif', fontWeight: 400 }}
              className="mt-1 text-[clamp(0.6rem,1.5vw,0.9rem)] leading-tight"
            >
              AT 5:00PM
              <br />
              6305 SOUTH HWY
              <br />
              SMITHFIELD, KY 40068
            </p>
          </div>
        </div>
        <img
          src="/images/orangeflowers.png"
          alt="Orange flowers"
          style={{ transitionDelay: isOpen ? "250ms" : "0ms" }}
          className={`pointer-events-none absolute right-[9%] top-[103%] z-[11] w-[20%] transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
          className={`absolute right-[7%] top-[115%] z-[5] w-[52%] transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <img
            src="/images/mandala.png"
            alt="Mandala"
            style={{ animation: "spin-slow 20s linear infinite" }}
            className="w-full drop-shadow-lg"
          />
          <div className="absolute inset-0 flex -translate-y-[1.5%] scale-[0.7] flex-col items-center justify-center text-center text-white">
            <p className="leading-none">
              <span
                style={{ fontFamily: '"altesse-std-24pt", sans-serif', fontWeight: 400 }}
                className="text-[clamp(4.9rem,12.8vw,8rem)]"
              >
                R
              </span>
              <span
                style={{ fontFamily: '"gelica", sans-serif', fontWeight: 170 }}
                className="text-[clamp(3rem,8vw,5rem)]"
              >
                SVP
              </span>
            </p>
            <p
              style={{ fontFamily: '"worthington-arcade", serif', fontWeight: 400 }}
              className="-mt-1 text-[clamp(1.2rem,3vw,3rem)] leading-none"
            >
              &gt;HERE&lt;
            </p>
          </div>
        </div>
        <img
          src="/images/polaroid-large.png"
          alt="Polaroid large"
          style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
          className={`absolute left-[13%] top-[132%] z-[4] w-[39%] -rotate-[14deg] drop-shadow-lg transition-all duration-700 ease-in-out ${isOpen ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        />
        <img
          src="/images/polaroid-medium.png"
          alt="Polaroid medium"
          style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
          className={`absolute right-[13%] top-[161%] z-[4] w-[42%] rotate-[15deg] drop-shadow-lg transition-all duration-700 ease-in-out ${isOpen ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        />
        <img
          src="/images/orangebranch.png"
          alt="Orange branch"
          style={{ transitionDelay: isOpen ? "650ms" : "0ms" }}
          className={`pointer-events-none absolute right-[66%] top-[158%] z-[4] w-[30%] transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          style={{ transitionDelay: isOpen ? "700ms" : "0ms" }}
          className={`absolute left-[10%] top-[157%] z-[4] w-[57%] transition-all duration-700 ease-in-out ${isOpen ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        >
          <img src="/images/tag.png" alt="Tag" className="w-full" />
          <div className="absolute inset-0 flex -translate-x-[16%] -translate-y-[5.5%] scale-[0.53] flex-col items-center justify-center text-center text-[#690d05]">
            <p className="leading-none">
              <span
                style={{ fontFamily: '"altesse-std-24pt", sans-serif', fontWeight: 400 }}
                className="text-[clamp(4.9rem,12.8vw,8rem)]"
              >
                R
              </span>
              <span
                style={{ fontFamily: '"canto-brush", sans-serif', fontWeight: 400 }}
                className="text-[clamp(3rem,8vw,5rem)]"
              >
                EGISTRY
              </span>
            </p>
            <p
              style={{ fontFamily: '"worthington-arcade", serif', fontWeight: 400 }}
              className="mt-0.3 text-[clamp(1.2rem,3vw,3rem)] leading-none"
            >
              &lt;FOR OUR HOME&gt;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
