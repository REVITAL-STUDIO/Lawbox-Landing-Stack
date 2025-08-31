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
            className="xl:text-base mt-[2%] xl:w-3/4 text-center text-sm show leading-6"
          >
            We come from the world of complex, unforgiving software — and we saw
            how little attention was being paid to the tools lawyers rely on
            every day. Attorneys spend hours trapped in their inboxes, juggling
            deadlines, case details, and client communication with tools never
            designed for the realities of legal work. The result? Chaos, wasted
            time, and real risk. We&apos;re software engineers who saw that gap
            and decided to fix it. Lawbox is our answer: an inbox that organizes
            itself by case, flags critical filings, and brings clarity without
            forcing lawyers to learn a new system. We&apos;re starting with a
            private beta, and we&apos;re looking for forward-thinking firms who
            want to shape the future of how attorneys manage email. Join the
            waitlist to be among the first to try it.
          </p>
        </div>
      </div>
    </div>
  );
}
