import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  const steps = [
    "Automatically sorts emails by case/matter",
    "Advanced search archiving",
    "Safe window protection for spam",
    "Seamless Outlook integration",
    "Ensures confidentiality compliance",
  ];

  return (
    <div className="w-full  text-white flex flex-col p-8 xl:h-screen">
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
          className="text-4xl uppercase tracking-widest show"
        >
          Revolutionize Your Law Firm's Inbox
          <br />— Securely and Efficiently
        </h3>
        <p
          data-scroll
          data-scroll-class="is-in"
          data-scroll-speed="0.08"
          data-scroll-repeat
          className="text-base mt-[2%]  xl:px-80 show"
        >
          Transform the way your firm manages communication. Lawbox streamlines
          email organization, enhances security, and ensures you never miss
          critical case details. Say goodbye to inbox chaos and hello to
          smarter, faster, and more secure workflows.
        </p>
      </div>
      <div className="relative pb-8 pl-24 max-w-6xl mt-[6%]"></div>
    </div>
  );
}
