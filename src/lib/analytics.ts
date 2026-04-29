export type EventPrimitive = string | number | boolean | null;
export type EventValue =
  | EventPrimitive
  | EventValue[]
  | { [key: string]: EventValue };
export type EventProps = Record<string, EventValue>;

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
    window.dataLayer?.push(arguments);
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
