// Cookie Consent Utilities
// Simple GDPR-compliant cookie consent management

export type CookieConsent = 'accepted' | 'rejected' | null

const CONSENT_COOKIE_NAME = 'transparo_cookie_consent'
const CONSENT_EXPIRY_DAYS = 365

/**
 * Get the current cookie consent status from localStorage
 */
export function getCookieConsent(): CookieConsent {
  if (typeof window === 'undefined') return null

  try {
    const consent = localStorage.getItem(CONSENT_COOKIE_NAME)
    if (consent === 'accepted' || consent === 'rejected') {
      return consent as CookieConsent
    }
    return null
  } catch {
    return null
  }
}

/**
 * Set cookie consent status in localStorage
 */
export function setCookieConsent(consent: 'accepted' | 'rejected'): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(CONSENT_COOKIE_NAME, consent)

    // Also set a cookie for server-side detection if needed
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS)

    document.cookie = `${CONSENT_COOKIE_NAME}=${consent}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`

    // Dispatch custom event for components to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: { consent } }))
  } catch (error) {
    console.error('Failed to set cookie consent:', error)
  }
}

/**
 * Check if user has made a consent decision
 */
export function hasConsentDecision(): boolean {
  return getCookieConsent() !== null
}

/**
 * Clear cookie consent (for testing or reset)
 */
export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.removeItem(CONSENT_COOKIE_NAME)
    document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  } catch (error) {
    console.error('Failed to clear cookie consent:', error)
  }
}

/**
 * Initialize analytics based on consent
 * Add your analytics initialization here (Google Analytics, etc.)
 */
export function initializeAnalytics(): void {
  const consent = getCookieConsent()

  if (consent === 'accepted') {
    // Initialize Google Analytics or other analytics tools here
    // Example: window.gtag('consent', 'update', { 'analytics_storage': 'granted' })
    console.log('Analytics enabled')
  } else {
    // Disable analytics
    console.log('Analytics disabled')
  }
}

/**
 * Listen to consent changes
 */
export function onConsentChange(callback: (consent: CookieConsent) => void): () => void {
  if (typeof window === 'undefined') return () => {}

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<{ consent: CookieConsent }>
    callback(customEvent.detail.consent)
  }

  window.addEventListener('cookieConsentChanged', handler)

  // Return cleanup function
  return () => {
    window.removeEventListener('cookieConsentChanged', handler)
  }
}
