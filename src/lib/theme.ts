export const PREDEFINED_THEMES = {
  'classic-original': 'Classic Trust - Original',
  'classic-vibrant': 'Classic Trust - Vibrant', 
  'classic-mellow': 'Classic Trust - Mellow',
  'wealth-original': 'Wealth & Prosperity - Original',
  'wealth-vibrant': 'Wealth & Prosperity - Vibrant',
  'wealth-mellow': 'Wealth & Prosperity - Mellow',
  'luxury-original': 'Premium Luxury - Original',
  'luxury-vibrant': 'Premium Luxury - Vibrant',
  'luxury-mellow': 'Premium Luxury - Mellow',
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

export type PredefinedThemeId = keyof typeof PREDEFINED_THEMES;
export type ThemeId = PredefinedThemeId | string; // Allow custom theme IDs

export interface CustomTheme {
  id: string;
  name: string;
  description: string;
  colors: {
    background: string;
    foreground: string;
    trustBlue: string;
    financialGreen: string;
    professionalNavy: string;
    lightBlue: string;
    lightGreen: string;
    neutralGray: string;
  };
  createdAt: string;
}

export const DEFAULT_THEME: ThemeId = 'classic-original';

export function getStoredTheme(): ThemeId {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  
  try {
    const stored = localStorage.getItem('theme') as ThemeId;
    if (stored && (stored in PREDEFINED_THEMES || getCustomThemes().some(t => t.id === stored))) {
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
  
  // Check if it's a custom theme
  const customTheme = getCustomThemes().find(t => t.id === theme);
  if (customTheme) {
    applyCustomTheme(customTheme);
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

export function applyCustomTheme(customTheme: CustomTheme): void {
  if (typeof document === 'undefined') return;
  
  // Remove any existing data-theme attribute
  document.documentElement.removeAttribute('data-theme');
  
  // Apply custom CSS variables directly to the root
  const root = document.documentElement;
  root.style.setProperty('--background', customTheme.colors.background);
  root.style.setProperty('--foreground', customTheme.colors.foreground);
  root.style.setProperty('--trust-blue', customTheme.colors.trustBlue);
  root.style.setProperty('--financial-green', customTheme.colors.financialGreen);
  root.style.setProperty('--professional-navy', customTheme.colors.professionalNavy);
  root.style.setProperty('--light-blue', customTheme.colors.lightBlue);
  root.style.setProperty('--light-green', customTheme.colors.lightGreen);
  root.style.setProperty('--neutral-gray', customTheme.colors.neutralGray);
}

// Custom theme management
export function getCustomThemes(): CustomTheme[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem('customThemes');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveCustomTheme(theme: CustomTheme): void {
  if (typeof window === 'undefined') return;
  
  try {
    const themes = getCustomThemes();
    const existingIndex = themes.findIndex(t => t.id === theme.id);
    
    if (existingIndex >= 0) {
      themes[existingIndex] = theme;
    } else {
      themes.push(theme);
    }
    
    localStorage.setItem('customThemes', JSON.stringify(themes));
  } catch {
    // Silently fail if localStorage is not available
  }
}

export function deleteCustomTheme(themeId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const themes = getCustomThemes().filter(t => t.id !== themeId);
    localStorage.setItem('customThemes', JSON.stringify(themes));
  } catch {
    // Silently fail if localStorage is not available
  }
}

export function createCustomThemeId(name: string): string {
  return `custom-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${Date.now()}`;
}

// Helper function to generate light variants of colors
export function generateLightColor(color: string, opacity: number = 0.2): string {
  // Simple function to lighten colors - in a real app you might want a more sophisticated color manipulation library
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    
    const lightR = Math.round(r + (255 - r) * opacity);
    const lightG = Math.round(g + (255 - g) * opacity);
    const lightB = Math.round(b + (255 - b) * opacity);
    
    return `#${lightR.toString(16).padStart(2, '0')}${lightG.toString(16).padStart(2, '0')}${lightB.toString(16).padStart(2, '0')}`;
  }
  return color;
}

// Theme initialization script to prevent FOUC
export const themeInitScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme') || 'classic-original';
      const customThemes = JSON.parse(localStorage.getItem('customThemes') || '[]');
      
      // Check if it's a custom theme
      const customTheme = customThemes.find(t => t.id === theme);
      if (customTheme) {
        // Apply custom theme colors directly
        const root = document.documentElement;
        root.style.setProperty('--background', customTheme.colors.background);
        root.style.setProperty('--foreground', customTheme.colors.foreground);
        root.style.setProperty('--trust-blue', customTheme.colors.trustBlue);
        root.style.setProperty('--financial-green', customTheme.colors.financialGreen);
        root.style.setProperty('--professional-navy', customTheme.colors.professionalNavy);
        root.style.setProperty('--light-blue', customTheme.colors.lightBlue);
        root.style.setProperty('--light-green', customTheme.colors.lightGreen);
        root.style.setProperty('--neutral-gray', customTheme.colors.neutralGray);
      } else {
        // Apply predefined theme
        document.documentElement.setAttribute('data-theme', theme);
      }
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'classic-original');
    }
  })();
`;