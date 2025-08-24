import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Banner() {
  return (
    <div className="w-full min-h-[75vh] text-white flex justify-between p-4 ">
      <div className="  max-w-7xl  mx-auto rounded-2xl flex flex-col justify-center items-center xl:flex-row ">
        <div className="flex flex-col text-center xl:text-left justify-center items-center gap-4 ">
          <h3
            data-scroll
            data-scroll-speed="0.08"
            data-scroll-repeat
            data-scroll-class="is-in"
            className="xl:text-4xl text-3xl tracking-widest xl:w-3/4  show"
          >
            DRIVEN BY A NEED WE COULDN'T IGNORE
          </h3>
          <p
            data-scroll
            data-scroll-speed="0.12"
            data-scroll-repeat
            data-scroll-class="is-in"
            className="text-base mt-[2%] w-3/4 show"
          >
            We come from the world of complex, unforgiving software. The legal
            inbox shouldn't be another adversary. We're here to give attorneys
            time, clarity, and control—without rewiring their day.
          </p>
        </div>
        <div className="relative max-w-lg h-auto">
          <Image
            data-scroll
            data-scroll-speed="0.12"
            data-scroll-repeat
            data-scroll-class="is-in"
            src="/logo-white.png"
            alt="lawbox"
            width={200}
            height={200}
            className=" object-contain xl:mr-36 show"
          />
        </div>
      </div>
    </div>
  );
}
