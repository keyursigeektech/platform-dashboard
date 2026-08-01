export function trackEvent(name: string, payload: Record<string, unknown>): void {
  // A small, replaceable integration point for a real analytics provider.
  if (import.meta.env.DEV) console.info('[analytics]', name, payload)
}
