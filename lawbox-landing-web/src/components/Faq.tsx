"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Lawbox?",
    answer:
      "Lawbox is an all-in-one platform for legal case management, document automation, and secure communication.",
  },
  {
    question: "Is Lawbox secure?",
    answer:
      "Yes. Lawbox uses end-to-end encryption and industry-standard security protocols to protect your data.",
  },
  {
    question: "Can I use Lawbox for my small firm?",
    answer:
      "Absolutely. Lawbox is built to scale from solo practices to large firms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full text-white p-8 z-50">
      <h2 className="text-4xl mt-[8%] mb-[4%] text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-start items-center text-left cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-2xl font-bold cursor-pointer text-[#FF5E00] mr-6">
                {openIndex === index ? "−" : "+"}
              </span>
              <span className="text-lg font-medium">{faq.question}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-300 ml-10">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
