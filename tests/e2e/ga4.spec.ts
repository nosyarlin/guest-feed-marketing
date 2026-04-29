import { expect, test } from "@playwright/test";

test("GA4 integration is enabled", async ({ page, context }) => {
  // Capture GA4 payloads
  const gaUrlPattern = /.*google-analytics.com\/g\/collect.*/i;
  await context.route(gaUrlPattern, (route) => {
    route.abort();
  });
  const requestPromise = page.waitForRequest(gaUrlPattern, { timeout: 2000 });
  await page.goto("/");

  // Test contents of the first GA4 request
  const request = await requestPromise;
  expect(request).toBeDefined();
  const url = new URL(request.url());
  const params = Object.fromEntries(url.searchParams.entries());
  expect(params.dt).toBe("Guest Feed");
  expect(params.en).toBe("page_view");
});
