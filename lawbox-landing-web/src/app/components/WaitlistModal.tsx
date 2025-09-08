'use client'
import { useCreateLead } from '@/api/api'
import { useModalLock } from '@/app/hooks/useModalLock'
import Image from 'next/image'
import React, { useState } from 'react'

const firmSizeOptions = [
  { value: 'solo', label: 'Solo Practice' },
  { value: 'small', label: 'Small Firm (2-10 attorneys)' },
  { value: 'medium', label: 'Medium Firm (11-50 attorneys)' },
  { value: 'large', label: 'Large Firm (50+ attorneys)' },
]

export default function WaitlistModal({
  wait,
  openList,
}: {
  wait: boolean
  openList: () => void
}) {
  const [email, setEmail] = useState('')
  const [painPoint, setPainPoint] = useState('')
  const [firmSize, setFirmSize] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  useModalLock(wait)

  const createLeadMutation = useCreateLead({
    mutation: {
      onSuccess: (data) => {
        console.log('Lead created successfully:', data)
        setMessage('Thanks for Joining!')
        setEmail('')
        setPainPoint('')
        setFirmSize('')
      },
      onError: (error) => {
        console.error('Error creating lead:', error)
        setMessage('Error Occurred. Try Again.')
      },
    },
  })

  async function submitWaitList(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!email.trim()) return

    createLeadMutation.mutate({
      data: {
        email: email.trim(),
        pain_point: painPoint.trim() || null,
        firm_size: firmSize || null,
      },
    })
  }

  return (
    <section
      onClick={openList}
      className={`fixed inset-0 z-[99999] bg-black/65 h-screen w-full backdrop-blur-3xl flex items-center justify-center transition-opacity duration-300 px-2
        ${
          wait
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-2xl max-w-3xl p-4 md:p-8 mx-auto shadow-xl border border-white/25 max-h-[90vh] md:max-h-[95vh] overflow-y-auto w-full md:w-auto"
      >
        <Image
          src="/logo-white.png"
          alt="Lawbox Secondary Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h2 className="text-xl md:text-3xl text-white px-3 py-4 md:py-6 max-w-sm text-center mx-auto">
          Stop drowning in your inbox.
        </h2>
        <p className="text-center text-[#cfcfcf] mb-4 md:mb-6 text-sm md:text-base">
          Join the waitlist for organized legal email.
        </p>

        <form onSubmit={submitWaitList} className="space-y-3 md:space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 border border-white/50 rounded-full focus:outline-none focus:border-[#FF5E00] transition-colors"
              required
            />
          </div>
          {/* Pain Point Field */}
          <div className="space-y-2">
            <textarea
              placeholder="What's your biggest email headache? (Missing deadlines? Can't find case files? Inbox chaos?)"
              value={painPoint}
              onChange={(e) => setPainPoint(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 border border-white/50 rounded-2xl focus:outline-none focus:border-[#FF5E00] transition-colors resize-none"
            />
          </div>
          {/* Firm Size Field */}
          <div className="space-y-2">
            <select
              value={firmSize}
              onChange={(e) => setFirmSize(e.target.value)}
              className="w-full px-4 py-3 bg-black text-white border border-white/50 rounded-full focus:outline-none focus:border-[#FF5E00] transition-colors firm-select-arrow"
            >
              <option value="" className="bg-black">
                Select firm size (Optional)
              </option>
              {firmSizeOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-black"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={createLeadMutation.isPending || !email.trim()}
            className="w-full px-6 py-3 text-black text-sm bg-white rounded-full hover:bg-[#FF5E00] hover:text-white transition-colors cursor-pointer duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {createLeadMutation.isPending ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>
        {message && (
          <p className="mt-4 md:mt-6 mx-auto text-sm text-center text-white">
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
