import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const scope = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // image pop-in
      gsap.fromTo(
        ".email",
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power1.in",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.in",
          stagger: 0.1,
        }
      );
    }, scope);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <section
      ref={scope}
      className="tracking-widest min-h-screen  flex flex-col justify-center items-center xl:px-8 "
    >
      <div className="text-white mt-[6%] mb-[2%]  text-center -z-10 px-8">
        <h1
          data-scroll
          data-scroll-speed="0.08"
          data-scroll-repeat
          className="text-3xl xl:text-6xl uppercase opacity-0 relative flex justify-center items-center reveal "
        >
          Supercharge your inbox{" "}
        </h1>
        <p
          data-scroll
          data-scroll-speed="0.08"
          data-scroll-repeat
          className="mt-8 xl:mt-12 text-base opacity-0 reveal "
        >
          Organize, secure, and streamline your legal inbox effortlessly.
        </p>
      </div>
      <div
        data-scroll
        data-scroll-speed="0.5"
        data-scroll-repeat
        className="xl:w-3/4 w-full h-[600px] relative xl:overflow-hidden overflow mb-[5%] mx-auto -z-10"
      >
        <Image
          src="/email.png"
          alt="Lawbox Email Plugin"
          fill
          className="absolute opacity-0 email object-cover [filter:drop-shadow(0_0_20px_#FF5E00)] inset-0 "
        />
      </div>
    </section>
  );
}
