import { test, expect } from '@playwright/test';
import { LESSONS } from '../src/lib/lessons.js';

// Landing page
test('landing page loads and has CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Next Academy/i);
  const cta = page.getByRole('link', { name: /Start the course|Iniciar|Inizia/i }).first();
  await expect(cta).toBeVisible();
});

// Lessons index
test('lessons index shows all lessons', async ({ page }) => {
  await page.goto('/lessons');
  const cards = page.locator('[data-testid="lesson-card"], article, li').filter({ hasText: 'JSX' });
  await expect(cards.first()).toBeVisible();
});

// Curriculum page
test('curriculum page loads', async ({ page }) => {
  await page.goto('/curriculum');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

// Dashboard page
test('dashboard page loads', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.getByRole('heading', { name: /Dashboard/i })).toBeVisible();
});

// First lesson
test('first lesson renders with title and content', async ({ page }) => {
  const first = LESSONS[0];
  await page.goto(`/lessons/${first.slug}`);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByText(/next →|próxima|successiva/i)).toBeVisible();
});

// Last lesson
test('last lesson renders and has prev nav', async ({ page }) => {
  const last = LESSONS[LESSONS.length - 1];
  await page.goto(`/lessons/${last.slug}`);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByText(/← previous|← anterior|← precedente/i)).toBeVisible();
});

// Prev/next navigation
test('prev/next lesson navigation works', async ({ page }) => {
  const first = LESSONS[0];
  const second = LESSONS[1];
  await page.goto(`/lessons/${first.slug}`);
  const nextLink = page.getByRole('link', { name: /next →|próxima|successiva/i });
  await nextLink.click();
  await expect(page).toHaveURL(`/lessons/${second.slug}`);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

// 404 for unknown slug
test('unknown lesson slug shows 404', async ({ page }) => {
  const response = await page.goto('/lessons/this-does-not-exist');
  expect(response?.status()).toBe(404);
});

// Middleware redirect: /lesson/* → /lessons/*
test('middleware redirects /lesson/ to /lessons/', async ({ page }) => {
  const first = LESSONS[0];
  await page.goto(`/lesson/${first.slug}`);
  await expect(page).toHaveURL(`/lessons/${first.slug}`);
});

// Dark mode toggle
test('dark mode toggle switches theme attribute', async ({ page }) => {
  await page.goto('/');
  const toggle = page.getByRole('button', { name: /dark mode|mode escuro|modalità scura/i });
  await toggle.click();
  const theme = await page.evaluate(() => document.documentElement.dataset.theme);
  expect(theme).toBe('dark');
});

// Command palette opens with keyboard shortcut
test('command palette opens on Ctrl+K', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Control+k');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
});
