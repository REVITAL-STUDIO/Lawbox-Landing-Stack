import Image from "next/image";

export default function CTABanner() {
  return (
    <div className="w-full  text-white flex flex-col xl:p-8 p-4 xl:h-screen">
      <div
        data-scroll
        data-scroll-class="is-in"
        data-scroll-speed="0.03"
        data-scroll-repeat
        className="flex flex-col gap-4 w-full my-4 text-center show"
      >
        <Image
          src="/outlook.png"
          alt="Lawbox Email Plugin"
          width={200}
          height={200}
          className="mx-auto inset-0 [filter:drop-shadow(0_0_20px_#FF5E00)]"
        />
        <h3
          data-scroll
          data-scroll-class="is-in"
          data-scroll-speed="0.05"
          data-scroll-repeat
          className="xl:text-4xl text-2xl w-full uppercase tracking-widest show "
        >
          Revolutionize Your Law Firm&apos;s Inbox
          <br />— Securely and Efficiently
        </h3>
        <p
          data-scroll
          data-scroll-class="is-in"
          data-scroll-speed="0.08"
          data-scroll-repeat
          className="text-base mt-[2%]  xl:px-80 show leading-6 "
        >
          Transform the way your firm manages email.{" "}
          <span className="font-medium text-lg">case0</span> organizes case
          correspondence automatically, flags critical deadlines, and protects
          sensitive client data. No more missed filings or inbox chaos — just
          faster, safer workflows built for attorneys.
        </p>
      </div>
      <div className="relative pb-8 pl-24 max-w-6xl mt-[6%]"></div>
    </div>
  );
}
