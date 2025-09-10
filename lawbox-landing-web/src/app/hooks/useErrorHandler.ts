import { useState } from 'react'

type MessageType = 'success' | 'error' | 'info'

interface Message {
  text: string
  type: MessageType
  styles: string
}

interface CustomError {
  response?: {
    status: number
  }
  code?: string
  message?: string
}

export function useErrorHandler() {
  const [message, setMessage] = useState<Message | null>(null)

  const getMessageStyles = (type: MessageType): string => {
    switch (type) {
      case 'success':
        return 'text-green-400 bg-green-400/10 border border-green-400/20'
      case 'error':
        return 'text-red-400 bg-red-400/10 border border-red-400/20'
      case 'info':
        return 'text-blue-400 bg-blue-400/10 border border-blue-400/20'
      default:
        return 'text-white'
    }
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  }

  const handleError = (error: CustomError) => {
    console.error('Error occurred:', error)

    let errorMessage = 'Something went wrong. Please try again.'

    if (error.response && error.response.status) {
      if (error.response.status === 409) {
        errorMessage = 'This email is already on our waitlist!'
      } else if (error.response.status >= 500) {
        errorMessage =
          'Our servers are having issues. Please try again in a moment.'
      }
    } else if (
      error.code === 'ERR_NETWORK' ||
      error.message === 'Network Error'
    ) {
      errorMessage =
        'Network connection issue. Please check your internet and try again.'
    } else if (
      error.code === 'ECONNABORTED' ||
      (error.message && error.message.includes('timeout'))
    ) {
      errorMessage = 'Request timed out. Please try again.'
    } else if (error.message) {
      errorMessage = error.message
    }

    const type: MessageType = 'error'
    setMessage({
      text: errorMessage,
      type,
      styles: getMessageStyles(type),
    })
  }

  const handleSuccess = (successMessage: string = 'Success!') => {
    const type: MessageType = 'success'
    setMessage({
      text: successMessage,
      type,
      styles: getMessageStyles(type),
    })
  }

  const clearMessage = () => setMessage(null)

  return {
    message,
    validateEmail,
    handleError,
    handleSuccess,
    clearMessage,
  }
}
