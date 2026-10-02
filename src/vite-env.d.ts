/// <reference types="vite/client" />

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, any>) => void;
    gtag?: (command: string, event: string, params?: Record<string, any>) => void;
  }
}

export {};
