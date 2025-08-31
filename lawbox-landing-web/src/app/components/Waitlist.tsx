"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Waitlist({
  wait,
  openList,
}: {
  wait: boolean;
  openList: () => void;
}) {
  const [mail, setMail] = useState<string | null>(null);

  async function submitWaitList(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = String(
      new FormData(e.currentTarget).get("email") || ""
    ).trim();
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMail(res.ok ? "Thanks for Joining!" : "Error Occured. Try Again.");
    console.log(data);
  }

  useEffect(() => {
    if (wait) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    };
  }, [wait]);

  return (
    <section
      onClick={openList}
      className={`fixed inset-0 z-[99999] bg-black/65 h-screen w-full backdrop-blur-3xl flex items-center justify-center transition-opacity duration-300 px-2
        ${
          wait
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        onClick={(e) => e.stopPropagation()} // <-- stops bubbling here
        className=" rounded-2xl max-w-3xl p-8 mx-auto shadow-xl border border-white/25"
      >
        <Image
          src="/logo-white.png"
          alt="Lawbox Secondary Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h2 className="text-3xl text-white px-3 py-6 max-w-sm text-center">
          Secure your place in the future of legal work.
        </h2>
        <p className="text-center text-[#cfcfcf]">
          Get early access before launch.
        </p>
        <form
          onSubmit={submitWaitList}
          className="mt-8 max-w-2xl py-4 border border-white/50 rounded-full flex items-center "
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="flex-1 px-4 placeholder:text-sm w-3/4  bg-transparent text-white placeholder-gray-400 focus:outline-none"
            required
          />{" "}
          <button
            type="submit"
            className=" px-4 py-2 z-50 text-black text-sm mr-4 bg-white rounded-full hover:bg-[#FF5E00] hover:text-white transition-colors cursor-pointer duration-300"
          >
            Join Waitlist
          </button>
        </form>
        {mail && (
          <p className="mt-8 mx-auto text-sm text-center text-white">{mail}</p>
        )}
      </div>
    </section>
  );
}
