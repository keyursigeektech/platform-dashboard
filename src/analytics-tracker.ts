// NOTE: this file is intentionally named differently from what main.tsx imports
// (main.tsx imports from './analytics' which does not exist)

import { useEffect } from 'react'

export function trackEvent(name: string, payload: unknown): void {
  console.info(`[analytics] ${name}`, payload)
}

export function Analytics(): null {
  useEffect(() => {
    trackEvent('page_view', { path: window.location.pathname })
  }, [])

  return null
}
