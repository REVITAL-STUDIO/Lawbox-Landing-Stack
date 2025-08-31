"use client";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import MotionPathPlugin from "gsap/MotionPathPlugin";

export default function Electric() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    const svg = svgRef.current;
    if (!svg) return;

    const paths = Array.from(svg.getElementsByTagName("path"));
    const rects = gsap.utils.toArray<HTMLElement>(".rect");
    const pick = (i: number) => paths[i % paths.length];
    const easePool = [
      "sine.inOut",
      "power1.inOut",
      "power2.inOut",
      "back.inOut(1.2)",
    ];

    rects.forEach((el, i) => {
      const p = pick(i);

      // different motion per element (but all start now)
      const duration = gsap.utils.random(3, 7);
      const start = gsap.utils.random(0, 0.6);
      const end = Math.min(1, start + gsap.utils.random(0.3, 0.7));
      const ease = easePool[i % easePool.length];

      gsap.to(el, {
        duration,
        ease,
        z: -10,
        repeat: -1,
        yoyo: true,
        // all start together: no delay, no stagger
        motionPath: {
          path: p,
          align: p,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start,
          end,
        } as MotionPath.Vars,
      });
    });

    return () => gsap.killTweensOf(".rect");
  }, []);

  return (
    <section className="fixed inset-0 h-[100svh] w-[100svw] ">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="bg-white/50 blur-sm w-4 h-4 absolute rect"
        ></div>
      ))}
      <svg
        ref={svgRef}
        className="w-full h-full absolute top-0"
        width="3845"
        height="2000"
        viewBox="0 0 3845 2000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M322 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M722 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M1122 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M1522 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M1922 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M2322 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M2722 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M3122 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M3522 0V2000" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M0 250H3844.5" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M0 550H3844.5" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M0 850H3844.5" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M0 1150H3844.5" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M0 1450H3844.5" stroke="#C5C5C5" strokeOpacity="0.25" />
        <path d="M0 1750H3844.5" stroke="#C5C5C5" strokeOpacity="0.25" />
      </svg>
    </section>
  );
}
