import { expect, test as base } from '@playwright/test';

// Collect errors emitted by the browser so every test can assert there were none.
const test = base.extend<{ browserErrors: string[] }>({
  browserErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (message.type() === 'error') {
          errors.push(message.text());
        }
      });
      await use(errors);
      expect(errors).toEqual([]);
    },
    { auto: true },
  ],
});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('shows the heading and buttons', async ({ page }) => {
  await expect(page).toHaveTitle('MyLazyModal');
  await expect(
    page.getByRole('heading', { name: 'Hello World.' }),
  ).toBeVisible();
  await expect(page.getByRole('button', { name: 'open modal' })).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'open counter' }),
  ).toBeVisible();
});

test('lazy loads the child component into a dialog', async ({ page }) => {
  const dialog = page.getByRole('dialog');
  await expect(dialog).toHaveCount(0);

  const chunkRequest = page.waitForRequest(/child\.component.*\.js/);
  await page.getByRole('button', { name: 'open modal' }).click();
  await chunkRequest;

  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveText(
    "Hi, buko106. I'm lazy loaded child component.",
  );
  await expect(page.locator('.my-mat-dialog-pane')).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
});

test('counter dialog counts clicks', async ({ page }) => {
  await page.getByRole('button', { name: 'open counter' }).click();

  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();

  await dialog.getByRole('button', { name: 'Click Here!' }).click();
  await expect(dialog.getByRole('button', { name: '1 Clicks!' })).toBeVisible();

  await dialog.getByRole('button', { name: '1 Clicks!' }).click();
  await dialog.getByRole('button', { name: '2 Clicks!' }).click();
  await expect(dialog.getByRole('button', { name: '3 Clicks!' })).toBeVisible();
});
