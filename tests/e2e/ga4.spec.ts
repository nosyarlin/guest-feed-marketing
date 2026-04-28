import { expect, test } from "@playwright/test";

test("GA4 captures page view, CTA, and full Tally payload", async ({ page }) => {
  await page.addInitScript(() => {
    (window as Window & { __tallySubmitPayload?: unknown }).__tallySubmitPayload = {
      formId: "LZEWdG",
      responseId: "resp_001",
      fields: {
        name: "Taylor",
        wedding_date: "2026-10-11",
      },
    };

    (window as Window & { Tally?: unknown }).Tally = {
      openPopup: (_formId, options) => {
        options?.onOpen?.();
        options?.onSubmit?.(
          (window as Window & { __tallySubmitPayload?: unknown }).__tallySubmitPayload,
        );
      },
      closePopup: () => {},
    };
  });

  await page.goto("/");
  await page.getByRole("button", { name: "Join waitlist" }).first().click();

  const dataLayer = await page.evaluate(
    () => (window as Window & { dataLayer?: unknown[] }).dataLayer ?? [],
  );
  const events = dataLayer.filter(
    (entry): entry is ["event", string, Record<string, unknown>] =>
      Array.isArray(entry) &&
      entry[0] === "event" &&
      typeof entry[1] === "string" &&
      typeof entry[2] === "object" &&
      entry[2] !== null,
  );

  const eventNames = events.map((entry) => entry[1]);
  expect(eventNames).toContain("page_view");
  expect(eventNames).toContain("cta_click");
  expect(eventNames).toContain("tally_form_open");
  expect(eventNames).toContain("tally_form_submit");

  const submitEvent = events.find((entry) => entry[1] === "tally_form_submit");
  expect(submitEvent).toBeTruthy();
  expect(submitEvent?.[2]).toMatchObject({
    payload: {
      formId: "LZEWdG",
      responseId: "resp_001",
      fields: {
        name: "Taylor",
        wedding_date: "2026-10-11",
      },
    },
  });
});
