'use client';

import { useState, useEffect } from 'react';
import { 
  type ThemeId, 
  type CustomTheme,
  getStoredTheme, 
  setStoredTheme, 
  applyTheme,
  getCustomThemes,
  deleteCustomTheme
} from '@/lib/theme';
import { CustomThemeForm } from './CustomThemeForm';

export interface ThemeGroup {
    id: string;
    name: string;
    description: string;
    psychology: string;
    bestFor: string;
    themes: Theme[];
}

export interface Theme {
    id: ThemeId;
    name: string;
    variant: 'Original' | 'Vibrant' | 'Mellow';
    description: string;
    colors: {
        trustBlue: string;
        financialGreen: string;
        professionalNavy: string;
    };
    isRecommended?: boolean;
}

const themeGroups: ThemeGroup[] = [
    {
        id: 'classic',
        name: 'Classic Trust',
        description: 'Maximum trust, reliability, professional competence',
        psychology: 'Traditional and dependable',
        bestFor: 'Traditional accounting firms, corporate clients',
        themes: [
            {
                id: 'classic-original',
                name: 'Balanced Professional',
                variant: 'Original',
                description: 'Safe, traditional, most popular',
                colors: { trustBlue: '#1e40af', financialGreen: '#059669', professionalNavy: '#0f172a' }
            },
            {
                id: 'classic-vibrant',
                name: 'Electric Energy',
                variant: 'Vibrant',
                description: 'Bold, attention-grabbing',
                colors: { trustBlue: '#0066ff', financialGreen: '#00d084', professionalNavy: '#ff6b35' }
            },
            {
                id: 'classic-mellow',
                name: 'Warm & Earthy',
                variant: 'Mellow',
                description: 'Warm, calm but rich',
                colors: { trustBlue: '#6b8db5', financialGreen: '#7a9b6e', professionalNavy: '#8b6f52' },
                isRecommended: true
            }
        ]
    },
    {
        id: 'wealth',
        name: 'Wealth & Prosperity',
        description: 'Growth, prosperity, financial success',
        psychology: 'Emphasizes money and growth',
        bestFor: 'Investment advisors, wealth management',
        themes: [
            {
                id: 'wealth-original',
                name: 'Growth-Focused',
                variant: 'Original',
                description: 'Traditional wealth theme',
                colors: { trustBlue: '#0d9488', financialGreen: '#047857', professionalNavy: '#134e4a' }
            },
            {
                id: 'wealth-vibrant',
                name: 'Bright Wealth',
                variant: 'Vibrant',
                description: 'Energetic prosperity',
                colors: { trustBlue: '#00bcd4', financialGreen: '#4caf50', professionalNavy: '#ff9800' }
            },
            {
                id: 'wealth-mellow',
                name: 'Earthy Prosperity',
                variant: 'Mellow',
                description: 'Includes your #b8753a color',
                colors: { trustBlue: '#8fa88c', financialGreen: '#b8753a', professionalNavy: '#a08470' },
                isRecommended: true
            }
        ]
    },
    {
        id: 'luxury',
        name: 'Premium Luxury',
        description: 'Luxury, wisdom, premium service quality',
        psychology: 'Sophisticated and high-end',
        bestFor: 'High-net-worth clients, boutique firms',
        themes: [
            {
                id: 'luxury-original',
                name: 'Purple & Gold',
                variant: 'Original',
                description: 'Sophisticated elegance',
                colors: { trustBlue: '#6366f1', financialGreen: '#d97706', professionalNavy: '#312e81' }
            },
            {
                id: 'luxury-vibrant',
                name: 'High-Energy Luxury',
                variant: 'Vibrant',
                description: 'Bold premium appeal',
                colors: { trustBlue: '#8b5cf6', financialGreen: '#fbbf24', professionalNavy: '#ec4899' }
            },
            {
                id: 'luxury-mellow',
                name: 'Dusty Rose Elegance',
                variant: 'Mellow',
                description: 'Warm sophisticated tones',
                colors: { trustBlue: '#c2949a', financialGreen: '#c8835f', professionalNavy: '#7d6b8d' }
            }
        ]
    },
    {
        id: 'fintech',
        name: 'Modern Fintech',
        description: 'Modern, innovative, professional credibility',
        psychology: 'Tech-forward but trustworthy',
        bestFor: 'Fintech services, younger demographics',
        themes: [
            {
                id: 'fintech-original',
                name: 'Contemporary Balance',
                variant: 'Original',
                description: 'Modern and reliable',
                colors: { trustBlue: '#0ea5e9', financialGreen: '#10b981', professionalNavy: '#1e293b' }
            },
            {
                id: 'fintech-vibrant',
                name: 'Tech-Forward Energy',
                variant: 'Vibrant',
                description: 'Bold innovation',
                colors: { trustBlue: '#0ea5e9', financialGreen: '#06d6a0', professionalNavy: '#ff6b6b' }
            },
            {
                id: 'fintech-mellow',
                name: 'Warm Tech',
                variant: 'Mellow',
                description: 'Includes your #b8753a color',
                colors: { trustBlue: '#6b8db5', financialGreen: '#95a885', professionalNavy: '#b8753a' },
                isRecommended: true
            }
        ]
    },
    {
        id: 'earth',
        name: 'Earth & Stability',
        description: 'Stable, reliable, down-to-earth',
        psychology: 'Natural and trustworthy',
        bestFor: 'Family businesses, small local firms',
        themes: [
            {
                id: 'earth-original',
                name: 'Reliable Warmth',
                variant: 'Original',
                description: 'Natural reliability',
                colors: { trustBlue: '#0f766e', financialGreen: '#059669', professionalNavy: '#92400e' }
            },
            {
                id: 'earth-vibrant',
                name: 'Energetic Earth',
                variant: 'Vibrant',
                description: 'Bold natural tones',
                colors: { trustBlue: '#0891b2', financialGreen: '#16a34a', professionalNavy: '#ea580c' }
            },
            {
                id: 'earth-mellow',
                name: 'Natural Sophistication',
                variant: 'Mellow',
                description: 'Warm earthy elegance',
                colors: { trustBlue: '#8fa88c', financialGreen: '#9ba068', professionalNavy: '#c8835f' }
            }
        ]
    },
    {
        id: 'minimal',
        name: 'Minimal Clean',
        description: 'Clean, minimal, highly professional',
        psychology: 'No-nonsense professionalism',
        bestFor: 'Corporate accounting, auditing firms',
        themes: [
            {
                id: 'minimal-original',
                name: 'Professional Minimalism',
                variant: 'Original',
                description: 'Ultra-professional',
                colors: { trustBlue: '#475569', financialGreen: '#6b7280', professionalNavy: '#1e293b' }
            },
            {
                id: 'minimal-vibrant',
                name: 'Bold Minimal',
                variant: 'Vibrant',
                description: 'Clean with energy',
                colors: { trustBlue: '#1e40af', financialGreen: '#059669', professionalNavy: '#dc2626' }
            },
            {
                id: 'minimal-mellow',
                name: 'Warm Minimal',
                variant: 'Mellow',
                description: 'Sophisticated neutrals',
                colors: { trustBlue: '#9b8b7a', financialGreen: '#a69088', professionalNavy: '#8b6f52' }
            }
        ]
    }
];

export function ThemePicker() {
    const [currentTheme, setCurrentTheme] = useState<ThemeId>('classic-original');
    const [isOpen, setIsOpen] = useState(false);
    const [activeGroup, setActiveGroup] = useState('classic');
    const [showCustomForm, setShowCustomForm] = useState(false);
    const [editingCustomTheme, setEditingCustomTheme] = useState<CustomTheme | undefined>();
    const [customThemes, setCustomThemes] = useState<CustomTheme[]>([]);

    useEffect(() => {
        const savedTheme = getStoredTheme();
        setCurrentTheme(savedTheme);
        applyTheme(savedTheme);

        // Load custom themes
        setCustomThemes(getCustomThemes());

        // Set active group based on current theme
        const customTheme = getCustomThemes().find(t => t.id === savedTheme);
        if (customTheme) {
            setActiveGroup('custom');
        } else {
            const group = (savedTheme as string).split('-')[0];
            setActiveGroup(group);
        }
    }, []);

    const handleThemeChange = (themeId: ThemeId) => {
        setCurrentTheme(themeId);
        applyTheme(themeId);
        setStoredTheme(themeId);
        setIsOpen(false);
    };

    const handleCustomThemeSave = (theme: CustomTheme) => {
        setCustomThemes(getCustomThemes());
        setCurrentTheme(theme.id);
        setShowCustomForm(false);
        setEditingCustomTheme(undefined);
        setActiveGroup('custom');
    };

    const handleCustomThemeEdit = (theme: CustomTheme) => {
        setEditingCustomTheme(theme);
        setShowCustomForm(true);
    };

    const handleCustomThemeDelete = (themeId: string) => {
        if (confirm('Are you sure you want to delete this custom theme?')) {
            deleteCustomTheme(themeId);
            setCustomThemes(getCustomThemes());

            // If the deleted theme was active, switch to default
            if (currentTheme === themeId) {
                handleThemeChange('classic-original');
            }
        }
    };

    const handleCustomFormCancel = () => {
        setShowCustomForm(false);
        setEditingCustomTheme(undefined);
    };

    const getCurrentThemeData = () => {
        // Check custom themes first
        const customTheme = customThemes.find(t => t.id === currentTheme);
        if (customTheme) {
            return {
                id: customTheme.id,
                name: customTheme.name,
                variant: 'Custom' as const,
                description: customTheme.description,
                colors: {
                    trustBlue: customTheme.colors.trustBlue,
                    financialGreen: customTheme.colors.financialGreen,
                    professionalNavy: customTheme.colors.professionalNavy,
                }
            };
        }

        // Check predefined themes
        for (const group of themeGroups) {
            const theme = group.themes.find(t => t.id === currentTheme);
            if (theme) return theme;
        }
        return themeGroups[0].themes[0];
    };

    const currentThemeData = getCurrentThemeData();

    return (
        <div className="relative">
            {/* Theme Picker Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors bg-white/90 backdrop-blur-sm"
                aria-label="Select theme"
            >
                {/* Color Preview */}
                <div className="flex gap-1">
                    <div
                        className="w-3 h-3 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: currentThemeData.colors.trustBlue }}
                    />
                    <div
                        className="w-3 h-3 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: currentThemeData.colors.financialGreen }}
                    />
                    <div
                        className="w-3 h-3 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: currentThemeData.colors.professionalNavy }}
                    />
                </div>

                {/* Dropdown Arrow */}
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
                                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${activeGroup === group.id
                                            ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {group.name}
                                </button>
                            ))}

                            {/* Custom Themes Tab */}
                            <button
                                onClick={() => setActiveGroup('custom')}
                                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${activeGroup === 'custom'
                                        ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Custom ({customThemes.length})
                            </button>
                        </div>

                        {/* Theme Content */}
                        <div className="max-h-[500px] overflow-y-auto">
                            {/* Custom Themes Content */}
                            {activeGroup === 'custom' && (
                                <div className="p-4">
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-1">Custom Themes</h4>
                                        <p className="text-sm text-gray-600 mb-2">Create and manage your own color schemes</p>
                                    </div>

                                    {/* Create New Button */}
                                    <button
                                        onClick={() => setShowCustomForm(true)}
                                        className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors mb-4"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Create New Custom Theme
                                    </button>

                                    {/* Custom Themes List */}
                                    {customThemes.length === 0 ? (
                                        <div className="text-center py-8 text-gray-500">
                                            <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v.586l.707.707A1 1 0 0113 7h4a2 2 0 012 2v11a4 4 0 01-4 4H7z" />
                                            </svg>
                                            <p className="text-sm">No custom themes yet</p>
                                            <p className="text-xs">Create your first custom theme to get started</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            {customThemes.map((theme) => (
                                                <div
                                                    key={theme.id}
                                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${currentTheme === theme.id
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
                                                    <div className="flex-1 min-w-0" onClick={() => handleThemeChange(theme.id)}>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-medium text-gray-900">{theme.name}</span>
                                                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                                                Custom
                                                            </span>
                                                        </div>
                                                        {theme.description && (
                                                            <div className="text-xs text-gray-500 mt-1">{theme.description}</div>
                                                        )}
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="flex items-center gap-1">
                                                        {currentTheme === theme.id && (
                                                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        )}

                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleCustomThemeEdit(theme);
                                                            }}
                                                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                                                            title="Edit theme"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>

                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleCustomThemeDelete(theme.id);
                                                            }}
                                                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                                                            title="Delete theme"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

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
                                                    className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${currentTheme === theme.id
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

                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className={`text-xs px-2 py-0.5 rounded-full ${theme.variant === 'Original' ? 'bg-gray-100 text-gray-700' :
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

            {/* Custom Theme Form Overlay */}
            {showCustomForm && (
                <div
                    className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            handleCustomFormCancel();
                        }
                    }}
                >
                    <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl">
                        <CustomThemeForm
                            editingTheme={editingCustomTheme}
                            onSave={handleCustomThemeSave}
                            onCancel={handleCustomFormCancel}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}