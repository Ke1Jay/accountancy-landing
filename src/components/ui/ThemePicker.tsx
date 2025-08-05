'use client';

import { useState, useEffect } from 'react';
import { 
  type ThemeId, 
  getStoredTheme, 
  setStoredTheme, 
  applyTheme
} from '@/lib/theme';

export interface ThemeGroup {
    id: string;
    name: string;
    description: string;
    psychology: string;
    bestFor: string;
    themes: Array<{
        id: ThemeId;
        name: string;
        description: string;
        variant: 'Original' | 'Vibrant' | 'Mellow';
        isRecommended?: boolean;
        colors: {
            primary: string;
            secondary: string;
            accent: string;
        };
    }>;
}

// Updated theme groups with semantic colors
const themeGroups: ThemeGroup[] = [
  {
    id: 'classic-trust',
    name: 'Classic Trust',
    description: 'Traditional banking and financial institution colors',
    psychology: 'Conveys reliability, stability, and professional competence',
    bestFor: 'Established accounting firms, corporate clients, traditional businesses',
    themes: [
      {
        id: 'classic-original',
        name: 'Classic Original',
        description: 'Balanced professional appearance',
        variant: 'Original',
        isRecommended: true,
        colors: {
          primary: '#1e40af',
          secondary: '#0f172a',
          accent: '#059669'
        }
      },
      {
        id: 'classic-vibrant',
        name: 'Classic Vibrant',
        description: 'More energetic and modern',
        variant: 'Vibrant',
        colors: {
          primary: '#0066ff',
          secondary: '#ff6b35',
          accent: '#00d084'
        }
      },
      {
        id: 'classic-mellow',
        name: 'Classic Mellow',
        description: 'Softer, more approachable',
        variant: 'Mellow',
        colors: {
          primary: '#6b8db5',
          secondary: '#8b6f52',
          accent: '#7a9b6e'
        }
      }
    ]
  },
  {
    id: 'wealth-prosperity',
    name: 'Wealth & Prosperity',
    description: 'Colors associated with financial growth and success',
    psychology: 'Evokes feelings of prosperity, growth, and financial achievement',
    bestFor: 'Wealth management, investment advisors, high-net-worth clients',
    themes: [
      {
        id: 'wealth-original',
        name: 'Wealth Original',
        description: 'Sophisticated wealth management',
        variant: 'Original',
        colors: {
          primary: '#0d9488',
          secondary: '#134e4a',
          accent: '#047857'
        }
      }
    ]
  },
  {
    id: 'modern-fintech',
    name: 'Modern Fintech',
    description: 'Contemporary, technology-forward financial services',
    psychology: 'Communicates innovation, efficiency, and forward-thinking',
    bestFor: 'Modern accounting firms, fintech integration, young professionals',
    themes: [
      {
        id: 'fintech-original',
        name: 'Fintech Original',
        description: 'Tech-forward accounting',
        variant: 'Original',
        colors: {
          primary: '#0ea5e9',
          secondary: '#1e293b',
          accent: '#10b981'
        }
      }
    ]
  },
  {
    id: 'premium-luxury',
    name: 'Premium Luxury',
    description: 'High-end, exclusive financial services palette',
    psychology: 'Suggests exclusivity, premium service, and attention to detail',
    bestFor: 'Boutique firms, luxury financial services, executive accounting',
    themes: [
      {
        id: 'luxury-original' as ThemeId,
        name: 'Premium Original',
        description: 'Exclusive financial services',
        variant: 'Original',
        colors: {
          primary: '#6366f1',
          secondary: '#312e81',
          accent: '#d97706'
        }
      }
    ]
  },
  {
    id: 'earth-stability',
    name: 'Earth & Stability',
    description: 'Grounded, reliable, and environmentally conscious',
    psychology: 'Represents stability, growth, and sustainable practices',
    bestFor: 'Sustainable businesses, agricultural accounting, family firms',
    themes: [
      {
        id: 'earth-original',
        name: 'Earth Original',
        description: 'Grounded financial stability',
        variant: 'Original',
        colors: {
          primary: '#0f766e',
          secondary: '#92400e',
          accent: '#059669'
        }
      }
    ]
  },
  {
    id: 'minimal-clean',
    name: 'Minimal Clean',
    description: 'Clean, minimalist approach to financial services',
    psychology: 'Suggests clarity, simplicity, and no-nonsense service',
    bestFor: 'Streamlined services, small business focus, efficiency-oriented',
    themes: [
      {
        id: 'minimal-original',
        name: 'Minimal Original',
        description: 'Clean, efficient service',
        variant: 'Original',
        colors: {
          primary: '#475569',
          secondary: '#1e293b',
          accent: '#6b7280'
        }
      }
    ]
  },
  {
    id: 'corporate-professional',
    name: 'Corporate Professional',
    description: 'Deep corporate and professional themes for established firms',
    psychology: 'Conveys ultimate professionalism, authority, and corporate excellence',
    bestFor: 'Large corporations, established accounting firms, enterprise clients',
    themes: [
      {
        id: 'corporate-blue',
        name: 'Corporate Blue',
        description: 'Deep corporate blue with silver accents',
        variant: 'Original',
        colors: {
          primary: '#1e3a8a',
          secondary: '#334155',
          accent: '#0891b2'
        }
      },
      {
        id: 'premium-gold',
        name: 'Premium Gold',
        description: 'Rich navy with gold accents for luxury',
        variant: 'Original',
        colors: {
          primary: '#1e293b',
          secondary: '#d97706',
          accent: '#059669'
        }
      }
    ]
  },
  {
    id: 'warm-approachable',
    name: 'Warm & Approachable',
    description: 'Friendly, warm themes that build personal connections',
    psychology: 'Creates approachable, trustworthy, and comfortable feelings',
    bestFor: 'Small business accountants, family firms, personal financial advisors',
    themes: [
      {
        id: 'warm-trust',
        name: 'Warm Trust',
        description: 'Your signature #b8753a color as primary',
        variant: 'Original',
        isRecommended: true,
        colors: {
          primary: '#b8753a',
          secondary: '#8b6f52',
          accent: '#059669'
        }
      },
      {
        id: 'sage-professional',
        name: 'Sage Professional',
        description: 'Sophisticated sage greens with navy',
        variant: 'Original',
        colors: {
          primary: '#7c9885',
          secondary: '#2d3748',
          accent: '#d97706'
        }
      }
    ]
  },
  {
    id: 'contemporary-fresh',
    name: 'Contemporary Fresh',
    description: 'Modern, fresh themes for forward-thinking professionals',
    psychology: 'Suggests innovation, freshness, and contemporary expertise',
    bestFor: 'Modern practices, younger demographics, tech-savvy clients',
    themes: [
      {
        id: 'modern-teal',
        name: 'Modern Teal',
        description: 'Contemporary teal with warm accents',
        variant: 'Original',
        colors: {
          primary: '#0d9488',
          secondary: '#1e293b',
          accent: '#f59e0b'
        }
      }
    ]
  }
];

export function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeId>('classic-original');
  const [activeGroup, setActiveGroup] = useState<string>('classic-trust');

  useEffect(() => {
    setCurrentTheme(getStoredTheme());
  }, []);

  const handleThemeChange = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
    setStoredTheme(themeId);
    applyTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Theme Picker Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
        aria-label="Choose theme"
      >
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-[var(--primary)]" />
          <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
          <div className="w-3 h-3 rounded-full bg-[var(--secondary)]" />
        </div>
        <span>Theme</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-2 w-[600px] max-w-[95vw] bg-[var(--base-100)] rounded-xl shadow-2xl border border-[var(--base-300)] z-50 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-[var(--base-300)] bg-[var(--base-200)]">
              <h3 className="font-semibold text-[var(--base-content)] mb-1">Choose Theme Style</h3>
              <p className="text-sm text-[var(--neutral)]">Professional semantic color schemes for accounting firms</p>
            </div>

            {/* Group Tabs */}
            <div className="flex overflow-x-auto border-b border-[var(--base-300)] bg-[var(--base-200)]">
              {themeGroups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => setActiveGroup(group.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeGroup === group.id 
                      ? 'text-[var(--primary)] border-b-2 border-[var(--primary)] bg-[var(--base-100)]' 
                      : 'text-[var(--neutral)] hover:text-[var(--base-content)]'
                  }`}
                >
                  {group.name}
                </button>
              ))}
            </div>

            {/* Theme Content */}
            <div className="max-h-[500px] overflow-y-auto">
              {themeGroups
                .filter(group => group.id === activeGroup)
                .map((group) => (
                  <div key={group.id} className="p-4">
                    {/* Group Info */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-[var(--base-content)] mb-1">{group.name}</h4>
                      <p className="text-sm text-[var(--neutral)] mb-2">{group.description}</p>
                      <p className="text-xs text-[var(--neutral)]">Best for: {group.bestFor}</p>
                    </div>

                    {/* Theme Variants */}
                    <div className="grid grid-cols-1 gap-2">
                      {group.themes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => handleThemeChange(theme.id)}
                          className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${
                            currentTheme === theme.id 
                              ? 'bg-[var(--primary)]/10 border-2 border-[var(--primary)]/20' 
                              : 'hover:bg-[var(--base-200)] border-2 border-transparent'
                          }`}
                        >
                          {/* Color Preview */}
                          <div className="flex gap-1 flex-shrink-0">
                            <div 
                              className="w-4 h-4 rounded-full border border-[var(--base-300)] shadow-sm" 
                              style={{ backgroundColor: theme.colors.primary }}
                            />
                            <div 
                              className="w-4 h-4 rounded-full border border-[var(--base-300)] shadow-sm" 
                              style={{ backgroundColor: theme.colors.accent }}
                            />
                            <div 
                              className="w-4 h-4 rounded-full border border-[var(--base-300)] shadow-sm" 
                              style={{ backgroundColor: theme.colors.secondary }}
                            />
                          </div>
                          
                          {/* Theme Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-[var(--base-content)]">{theme.name}</span>
                              {theme.isRecommended && (
                                <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5 rounded-full">
                                  ⭐ Recommended
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                theme.variant === 'Original' ? 'bg-[var(--base-300)] text-[var(--base-content)]' :
                                theme.variant === 'Vibrant' ? 'bg-orange-100 text-orange-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {theme.variant}
                              </span>
                              <span className="text-xs text-[var(--neutral)]">{theme.description}</span>
                            </div>
                          </div>
                          
                          {/* Selected Indicator */}
                          {currentTheme === theme.id && (
                            <div className="w-5 h-5 bg-[var(--primary)] rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-[var(--primary-content)]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-[var(--base-300)] bg-[var(--base-200)]">
              <p className="text-xs text-[var(--neutral)] text-center">
                Theme changes apply instantly and persist across sessions. Uses semantic color system (primary, secondary, accent, neutral).
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}