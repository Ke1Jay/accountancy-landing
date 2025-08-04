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
            trustBlue: string;
            financialGreen: string;
            professionalNavy: string;
        };
    }>;
}

// Updated theme groups without custom theme functionality
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
          trustBlue: '#1e40af',
          financialGreen: '#059669',
          professionalNavy: '#0f172a'
        }
      },
      {
        id: 'classic-vibrant',
        name: 'Classic Vibrant',
        description: 'More energetic and modern',
        variant: 'Vibrant',
        colors: {
          trustBlue: '#2563eb',
          financialGreen: '#10b981',
          professionalNavy: '#1e293b'
        }
      },
      {
        id: 'classic-mellow',
        name: 'Classic Mellow',
        description: 'Softer, more approachable',
        variant: 'Mellow',
        colors: {
          trustBlue: '#3b82f6',
          financialGreen: '#34d399',
          professionalNavy: '#334155'
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
          trustBlue: '#1d4ed8',
          financialGreen: '#047857',
          professionalNavy: '#111827'
        }
      },
      {
        id: 'wealth-vibrant',
        name: 'Wealth Vibrant',
        description: 'Dynamic investment focus',
        variant: 'Vibrant',
        colors: {
          trustBlue: '#2563eb',
          financialGreen: '#059669',
          professionalNavy: '#1f2937'
        }
      },
      {
        id: 'wealth-mellow',
        name: 'Wealth Mellow',
        description: 'Refined luxury approach',
        variant: 'Mellow',
        colors: {
          trustBlue: '#3b82f6',
          financialGreen: '#10b981',
          professionalNavy: '#374151'
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
        id: 'premium-original',
        name: 'Premium Original',
        description: 'Exclusive financial services',
        variant: 'Original',
        colors: {
          trustBlue: '#1e3a8a',
          financialGreen: '#065f46',
          professionalNavy: '#0c1017'
        }
      },
      {
        id: 'premium-vibrant',
        name: 'Premium Vibrant',
        description: 'Luxury with energy',
        variant: 'Vibrant',
        colors: {
          trustBlue: '#1d4ed8',
          financialGreen: '#047857',
          professionalNavy: '#111827'
        }
      },
      {
        id: 'premium-mellow',
        name: 'Premium Mellow',
        description: 'Sophisticated elegance',
        variant: 'Mellow',
        colors: {
          trustBlue: '#2563eb',
          financialGreen: '#059669',
          professionalNavy: '#1f2937'
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
          trustBlue: '#2563eb',
          financialGreen: '#10b981',
          professionalNavy: '#1e293b'
        }
      },
      {
        id: 'fintech-vibrant',
        name: 'Fintech Vibrant',
        description: 'Dynamic tech integration',
        variant: 'Vibrant',
        isRecommended: true,
        colors: {
          trustBlue: '#3b82f6',
          financialGreen: '#34d399',
          professionalNavy: '#334155'
        }
      },
      {
        id: 'fintech-mellow',
        name: 'Fintech Mellow',
        description: 'Approachable innovation',
        variant: 'Mellow',
        colors: {
          trustBlue: '#60a5fa',
          financialGreen: '#6ee7b7',
          professionalNavy: '#475569'
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
          trustBlue: '#1e40af',
          financialGreen: '#047857',
          professionalNavy: '#0f172a'
        }
      },
      {
        id: 'earth-vibrant',
        name: 'Earth Vibrant',
        description: 'Dynamic sustainability',
        variant: 'Vibrant',
        colors: {
          trustBlue: '#2563eb',
          financialGreen: '#059669',
          professionalNavy: '#1e293b'
        }
      },
      {
        id: 'earth-mellow',
        name: 'Earth Mellow',
        description: 'Natural, calming approach',
        variant: 'Mellow',
        colors: {
          trustBlue: '#3b82f6',
          financialGreen: '#10b981',
          professionalNavy: '#334155'
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
          trustBlue: '#2563eb',
          financialGreen: '#059669',
          professionalNavy: '#1e293b'
        }
      },
      {
        id: 'minimal-vibrant',
        name: 'Minimal Vibrant',
        description: 'Energetic simplicity',
        variant: 'Vibrant',
        colors: {
          trustBlue: '#3b82f6',
          financialGreen: '#10b981',
          professionalNavy: '#334155'
        }
      },
      {
        id: 'minimal-mellow',
        name: 'Minimal Mellow',
        description: 'Soft, understated elegance',
        variant: 'Mellow',
        colors: {
          trustBlue: '#60a5fa',
          financialGreen: '#34d399',
          professionalNavy: '#475569'
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
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--professional-navy)] hover:text-[var(--trust-blue)] transition-colors"
        aria-label="Choose theme"
      >
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-[var(--trust-blue)]" />
          <div className="w-3 h-3 rounded-full bg-[var(--financial-green)]" />
          <div className="w-3 h-3 rounded-full bg-[var(--professional-navy)]" />
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
          <div className="absolute right-0 mt-2 w-[600px] max-w-[95vw] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-1">Choose Theme Style</h3>
              <p className="text-sm text-gray-500">18 professional color schemes for accounting firms</p>
            </div>

            {/* Group Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50">
              {themeGroups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => setActiveGroup(group.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeGroup === group.id 
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {group.name}
                </button>
              ))}
            </div>

            {/* Theme Content */}
            <div className="max-h-[500px] overflow-y-auto">
              {/* Predefined Themes Content */}
              {themeGroups
                .filter(group => group.id === activeGroup)
                .map((group) => (
                  <div key={group.id} className="p-4">
                    {/* Group Info */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{group.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{group.description}</p>
                      <p className="text-xs text-gray-500">Best for: {group.bestFor}</p>
                    </div>

                    {/* Theme Variants */}
                    <div className="grid grid-cols-1 gap-2">
                      {group.themes.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => handleThemeChange(theme.id)}
                          className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${
                            currentTheme === theme.id 
                              ? 'bg-blue-50 border-2 border-blue-200' 
                              : 'hover:bg-gray-50 border-2 border-transparent'
                          }`}
                        >
                          {/* Color Preview */}
                          <div className="flex gap-1 flex-shrink-0">
                            <div 
                              className="w-4 h-4 rounded-full border border-white shadow-sm" 
                              style={{ backgroundColor: theme.colors.trustBlue }}
                            />
                            <div 
                              className="w-4 h-4 rounded-full border border-white shadow-sm" 
                              style={{ backgroundColor: theme.colors.financialGreen }}
                            />
                            <div 
                              className="w-4 h-4 rounded-full border border-white shadow-sm" 
                              style={{ backgroundColor: theme.colors.professionalNavy }}
                            />
                          </div>
                          
                          {/* Theme Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">{theme.name}</span>
                              {theme.isRecommended && (
                                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                  ⭐ Recommended
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                theme.variant === 'Original' ? 'bg-gray-100 text-gray-700' :
                                theme.variant === 'Vibrant' ? 'bg-orange-100 text-orange-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {theme.variant}
                              </span>
                              <span className="text-xs text-gray-500">{theme.description}</span>
                            </div>
                          </div>
                          
                          {/* Selected Indicator */}
                          {currentTheme === theme.id && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                Theme changes apply instantly and persist across sessions
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}