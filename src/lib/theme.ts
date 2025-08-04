export const PREDEFINED_THEMES = {
  'classic-original': 'Classic Trust - Original',
  'classic-vibrant': 'Classic Trust - Vibrant', 
  'classic-mellow': 'Classic Trust - Mellow',
  'wealth-original': 'Wealth & Prosperity - Original',
  'wealth-vibrant': 'Wealth & Prosperity - Vibrant',
  'wealth-mellow': 'Wealth & Prosperity - Mellow',
  'premium-original': 'Premium Luxury - Original',
  'premium-vibrant': 'Premium Luxury - Vibrant',
  'premium-mellow': 'Premium Luxury - Mellow',
  'fintech-original': 'Modern Fintech - Original',
  'fintech-vibrant': 'Modern Fintech - Vibrant',
  'fintech-mellow': 'Modern Fintech - Mellow',
  'earth-original': 'Earth & Stability - Original',
  'earth-vibrant': 'Earth & Stability - Vibrant',
  'earth-mellow': 'Earth & Stability - Mellow',
  'minimal-original': 'Minimal Clean - Original',
  'minimal-vibrant': 'Minimal Clean - Vibrant',
  'minimal-mellow': 'Minimal Clean - Mellow',
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