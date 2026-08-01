import { useEffect } from 'react'
import { trackEvent } from './analytics-tracker'

export function Analytics(): null {
  useEffect(() => {
    trackEvent('app_loaded', { path: window.location.pathname })
  }, [])
  return null
}
