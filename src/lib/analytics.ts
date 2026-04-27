type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "js" | "config" | "event",
      target: Date | string,
      params?: EventProps,
    ) => void;
  }
}

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initAnalytics(): void {
  if (!gaMeasurementId || window.gtag) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // Use canonical GA shim shape: push the `arguments` object.
    window.dataLayer?.push(arguments as unknown as never);
  };

  window.gtag("js", new Date());
  window.gtag("config", gaMeasurementId);
}

export function trackEvent(eventName: string, params: EventProps = {}): void {
  if (!gaMeasurementId || !window.gtag) {
    return;
  }
  window.gtag("event", eventName, params);
}
