export const PREDEFINED_THEMES = {
  'classic-original': 'Classic Trust - Original',
  'classic-vibrant': 'Classic Trust - Vibrant', 
  'classic-mellow': 'Classic Trust - Mellow',
  'wealth-original': 'Wealth & Prosperity - Original',
  'fintech-original': 'Modern Fintech - Original',
  'luxury-original': 'Premium Luxury - Original',
  'earth-original': 'Earth & Stability - Original',
  'minimal-original': 'Minimal Clean - Original',
} as const;

export type ThemeId = keyof typeof PREDEFINED_THEMES;

export const DEFAULT_THEME: ThemeId = 'classic-original';

export function getStoredTheme(): ThemeId {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  
  try {
    const stored = localStorage.getItem('theme') as ThemeId;
    if (stored && stored in PREDEFINED_THEMES) {
      return stored;
    }
    return DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function setStoredTheme(theme: ThemeId): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Silently fail if localStorage is not available
  }
}

export function applyTheme(theme: ThemeId): void {
  if (typeof document === 'undefined') return;
  
  document.documentElement.setAttribute('data-theme', theme);
}