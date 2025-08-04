'use client';

import { useState } from 'react';
import { 
  type CustomTheme, 
  createCustomThemeId, 
  generateLightColor, 
  saveCustomTheme,
  applyTheme,
  setStoredTheme 
} from '@/lib/theme';

interface CustomThemeFormProps {
  onSave: (theme: CustomTheme) => void;
  onCancel: () => void;
  editingTheme?: CustomTheme;
}

export function CustomThemeForm({ onSave, onCancel, editingTheme }: CustomThemeFormProps) {
  const [formData, setFormData] = useState({
    name: editingTheme?.name || '',
    description: editingTheme?.description || '',
    trustBlue: editingTheme?.colors.trustBlue || '#1e40af',
    financialGreen: editingTheme?.colors.financialGreen || '#059669',
    professionalNavy: editingTheme?.colors.professionalNavy || '#0f172a',
    background: editingTheme?.colors.background || '#ffffff',
    foreground: editingTheme?.colors.foreground || '#171717',
    neutralGray: editingTheme?.colors.neutralGray || '#64748b',
  });

  const [previewMode, setPreviewMode] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreview = () => {
    if (!previewMode) {
      const previewTheme: CustomTheme = {
        id: 'preview',
        name: formData.name || 'Preview Theme',
        description: formData.description || 'Preview',
        colors: {
          background: formData.background,
          foreground: formData.foreground,
          trustBlue: formData.trustBlue,
          financialGreen: formData.financialGreen,
          professionalNavy: formData.professionalNavy,
          lightBlue: generateLightColor(formData.trustBlue, 0.2),
          lightGreen: generateLightColor(formData.financialGreen, 0.2),
          neutralGray: formData.neutralGray,
        },
        createdAt: new Date().toISOString(),
      };
      applyTheme('preview');
      // Manually apply preview since it's not saved yet
      const root = document.documentElement;
      root.style.setProperty('--background', previewTheme.colors.background);
      root.style.setProperty('--foreground', previewTheme.colors.foreground);
      root.style.setProperty('--trust-blue', previewTheme.colors.trustBlue);
      root.style.setProperty('--financial-green', previewTheme.colors.financialGreen);
      root.style.setProperty('--professional-navy', previewTheme.colors.professionalNavy);
      root.style.setProperty('--light-blue', previewTheme.colors.lightBlue);
      root.style.setProperty('--light-green', previewTheme.colors.lightGreen);
      root.style.setProperty('--neutral-gray', previewTheme.colors.neutralGray);
    } else {
      // Reset to original theme
      applyTheme('classic-original');
    }
    setPreviewMode(!previewMode);
  };

  const handleSave = () => {
    if (!formData.name.trim()) {
      alert('Please enter a theme name');
      return;
    }

    const theme: CustomTheme = {
      id: editingTheme?.id || createCustomThemeId(formData.name),
      name: formData.name.trim(),
      description: formData.description.trim(),
      colors: {
        background: formData.background,
        foreground: formData.foreground,
        trustBlue: formData.trustBlue,
        financialGreen: formData.financialGreen,
        professionalNavy: formData.professionalNavy,
        lightBlue: generateLightColor(formData.trustBlue, 0.2),
        lightGreen: generateLightColor(formData.financialGreen, 0.2),
        neutralGray: formData.neutralGray,
      },
      createdAt: editingTheme?.createdAt || new Date().toISOString(),
    };

    saveCustomTheme(theme);
    applyTheme(theme.id);
    setStoredTheme(theme.id);
    onSave(theme);
  };

  const resetToDefaults = () => {
    setFormData({
      name: '',
      description: '',
      trustBlue: '#1e40af',
      financialGreen: '#059669',
      professionalNavy: '#0f172a',
      background: '#ffffff',
      foreground: '#171717',
      neutralGray: '#64748b',
    });
  };

  return (
    <div className="p-6 max-w-2xl w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {editingTheme ? 'Edit Custom Theme' : 'Create Custom Theme'}
        </h3>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {/* Theme Info */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g., My Brand Colors"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              maxLength={50}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="e.g., Custom colors for our brand"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              maxLength={100}
            />
          </div>
        </div>

        {/* Main Brand Colors */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-3">Brand Colors</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Blue
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.trustBlue}
                  onChange={(e) => handleInputChange('trustBlue', e.target.value)}
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.trustBlue}
                  onChange={(e) => handleInputChange('trustBlue', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#1e40af"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Used for buttons, links, accents</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Financial Green
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.financialGreen}
                  onChange={(e) => handleInputChange('financialGreen', e.target.value)}
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.financialGreen}
                  onChange={(e) => handleInputChange('financialGreen', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#059669"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Used for success states, money</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Professional Navy
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.professionalNavy}
                  onChange={(e) => handleInputChange('professionalNavy', e.target.value)}
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.professionalNavy}
                  onChange={(e) => handleInputChange('professionalNavy', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#0f172a"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Used for headings, dark areas</p>
            </div>
          </div>
        </div>

        {/* Background Colors */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-3">Background & Text</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.background}
                  onChange={(e) => handleInputChange('background', e.target.value)}
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.background}
                  onChange={(e) => handleInputChange('background', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#ffffff"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Text Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.foreground}
                  onChange={(e) => handleInputChange('foreground', e.target.value)}
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.foreground}
                  onChange={(e) => handleInputChange('foreground', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#171717"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Neutral Gray
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.neutralGray}
                  onChange={(e) => handleInputChange('neutralGray', e.target.value)}
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.neutralGray}
                  onChange={(e) => handleInputChange('neutralGray', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#64748b"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Color Preview */}
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-3">Color Preview</h4>
          <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: formData.trustBlue }}
              title="Primary Blue"
            />
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: formData.financialGreen }}
              title="Financial Green"
            />
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: formData.professionalNavy }}
              title="Professional Navy"
            />
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: formData.neutralGray }}
              title="Neutral Gray"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={handlePreview}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              previewMode 
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            {previewMode ? 'Stop Preview' : 'Preview Theme'}
          </button>

          <button
            onClick={resetToDefaults}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Reset to Defaults
          </button>

          <div className="flex-1"></div>

          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {editingTheme ? 'Update Theme' : 'Save Theme'}
          </button>
        </div>
      </div>
    </div>
  );
}