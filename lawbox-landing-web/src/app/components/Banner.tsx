import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full min-h-[75vh] text-white flex justify-between p-4 ">
      <div className="  max-w-7xl  mx-auto rounded-2xl flex   justify-center items-center flex-col ">
        <div className="flex flex-col text-center xl:text-left justify-center items-center gap-4 ">
          <div className="relative max-w-lg h-auto">
            <Image
              data-scroll
              data-scroll-speed="0.15"
              data-scroll-repeat
              data-scroll-class="is-in"
              src="/logo-white.png"
              alt="lawbox"
              width={200}
              height={200}
              className=" object-contain mb-8 show"
            />
          </div>
          <h3
            data-scroll
            data-scroll-speed="0.08"
            data-scroll-repeat
            data-scroll-class="is-in"
            className="xl:text-4xl text-2xl tracking-widest  uppercase text-center show"
          >
            Built for Attorneys, Inspired by Experience
          </h3>
          <p
            data-scroll
            data-scroll-speed="0.05"
            data-scroll-repeat
            data-scroll-class="is-in"
            className="xl:text-base mt-[2%]  text-center text-sm show leading-6"
          >
            Lawyers spend hours lost in inboxes, juggling deadlines and client
            communications with tools never built for legal work. We&apos;re
            engineers who saw that gap and built Case0: an inbox that organizes
            itself by case, flags critical filings, and brings clarity without
            adding complexity. We&apos;re starting with a private beta — join
            the waitlist to help shape the future of legal email.
          </p>
        </div>
      </div>
    </div>
  );
}
