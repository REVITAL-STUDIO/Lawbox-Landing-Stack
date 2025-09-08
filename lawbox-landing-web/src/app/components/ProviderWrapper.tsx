'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1, // Retry once for network issues
            refetchOnWindowFocus: false, // Don't refetch on tab switch
            staleTime: 30 * 1000, // 30 seconds - good default for most data
            gcTime: 5 * 60 * 1000, // 5 minutes - how long to keep in cache
          },
          mutations: {
            retry: 1, // Retry submissions once
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Future providers will go here:
          - AuthProvider
          - ThemeProvider
          - etc.
      */}
    </QueryClientProvider>
  )
}
