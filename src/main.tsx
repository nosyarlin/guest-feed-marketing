import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initAnalytics, trackEvent } from "./lib/analytics.ts";
import { initTally } from "./lib/tally.ts";

initTally();
initAnalytics();
trackEvent("page_view", { page: "landing" });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
