import { expect, test } from "@playwright/test";

test.describe("Landing visual regression", () => {
  async function stabilizeMedia(page: import("@playwright/test").Page) {
    await page.evaluate(() => {
      document.querySelectorAll("video").forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }

  test("desktop view", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 2200 });
    await page.goto("/");
    await stabilizeMedia(page);
    await expect(page).toHaveScreenshot("landing-desktop.png", {
      fullPage: true,
      mask: [page.locator("video")],
    });
  });

  test("mobile view", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 2600 });
    await page.goto("/");
    await stabilizeMedia(page);
    await expect(page).toHaveScreenshot("landing-mobile.png", {
      fullPage: true,
      mask: [page.locator("video")],
    });
  });
});
