/**
 * Asset Configuration for Neue Welt V0
 *
 * ============================================
 * ASSET-STRATEGIE (Hybrid-Ansatz)
 * ============================================
 *
 * R2 CDN (asset() verwenden):
 * - Videos (*.mp4, *.webm) — immer, egal wie groß
 * - Große Bilder (>100KB) — Character-Art, Backgrounds
 * - Beispiele: /videos/hero.mp4, /images/io-1.png, /images/overlay.webp
 *
 * Lokal (/public, direkter Pfad):
 * - SVGs — UI-Icons, Logos (kein Content-Type Problem)
 * - Kleine Bilder (<100KB) — Icons, Thumbnails
 * - Fonts — werden ohnehin lokal geladen
 * - Beispiele: /images/nw-logo.svg, /images/menu.svg
 *
 * Warum Hybrid?
 * - SVGs auf R2 haben Content-Type Probleme (Browser zeigt nichts)
 * - Kleine Assets: Extra HTTP-Request > inline/lokal
 * - Große Assets: CDN-Caching + kein Build-Bloat
 * ============================================
 */

// R2 Asset Base URL
export const ASSETS_URL = import.meta.env.PROD
  ? 'https://assets.newworld.systems'
  : '';

/**
 * Get the full URL for a LARGE asset (videos, big images)
 *
 * @param {string} path - Asset path starting with / (e.g., '/videos/hero.mp4')
 * @returns {string} Full R2 URL in production, relative path in development
 *
 * @example
 * // Production: https://assets.newworld.systems/videos/hero.mp4
 * // Development: /videos/hero.mp4
 * asset('/videos/hero.mp4')
 *
 * @note Für SVGs und kleine Bilder (<100KB) NICHT verwenden!
 *       Stattdessen direkt: src="/images/logo.svg"
 */
export const asset = (path) => `${ASSETS_URL}${path}`;

/**
 * Asset Registry — Was ist wo?
 *
 * Aktualisieren wenn neue Assets hinzugefügt werden!
 */
export const ASSET_REGISTRY = {
  // ===== R2 CDN (asset() verwenden) =====
  r2: {
    videos: [
      '/videos/hero.mp4',
      '/videos/2ah.mp4',
      '/videos/output2.mp4',
      '/videos/output3.mp4',
      '/videos/postcard-vd.mp4',
    ],
    images: [
      '/images/io-1.png',      // 2.1MB
      '/images/io-2.png',      // 1.8MB
      '/images/io-3.png',      // 1.5MB
      '/images/overlay.webp',  // 156KB
    ],
  },

  // ===== Lokal (/public, direkter Pfad) =====
  local: {
    svgs: [
      '/images/nw-logo.svg',   // 8KB — Hauptlogo
      '/images/nav-logo.svg',  // 0.5KB — Nav-Logo
      '/images/menu.svg',      // 0.4KB — Burger-Menu
      '/images/play.svg',      // 0.3KB — Play-Button
      '/images/ps-logo.svg',   // 4.7KB — PlayStation Logo
      '/images/x-logo.svg',    // 7.2KB — X/Twitter Logo
    ],
    images: [
      '/images/fav.png',       // Favicon
    ],
    fonts: [
      '/fonts/*',              // Alle Fonts lokal
    ],
  },
};
