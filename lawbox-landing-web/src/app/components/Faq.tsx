'use client'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is case0?',
    answer:
      'case0 is an AI-powered inbox assistant built for attorneys. It works inside Outlook to organize case correspondence, flag deadlines, and draft routine responses — helping firms reduce email chaos and focus on practicing law.',
  },
  {
    question: 'Is case0 secure?',
    answer:
      'Yes. case0 is built with enterprise-grade security and compliance in mind. All data is encrypted in transit and at rest, and the platform follows ABA guidelines for handling client communications.',
  },
  {
    question: 'Will it work for my small firm?',
    answer:
      'Absolutely. case0 was designed to support solo attorneys and small firms who don’t have IT staff. It’s easy to set up, requires no migration, and scales as your practice grows.',
  },
  {
    question: 'Do I need to leave Outlook or learn new software?',
    answer:
      'No. case0 integrates directly with your existing Outlook inbox. You keep the tools you already know — case0 just makes them smarter.',
  },
  {
    question: 'When can I start using case0?',
    answer:
      'We’re currently in private beta with early access rolling out soon. Join the waitlist today to reserve your spot and be among the first firms to try it.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full text-white p-8 z-50">
      <h2 className="xl:text-4xl text-2xl mt-[8%] mb-[4%] text-center">
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
                {openIndex === index ? '−' : '+'}
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
  )
}
