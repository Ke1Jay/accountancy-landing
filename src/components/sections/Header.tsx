import { ThemePicker } from '@/components/ui/ThemePicker';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="text-xl font-bold text-[var(--professional-navy)]">
            ProAccounting
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-[var(--professional-navy)] transition-colors">Home</a>
          <a href="#services" className="text-gray-600 hover:text-[var(--professional-navy)] transition-colors">Services</a>
          <a href="#about" className="text-gray-600 hover:text-[var(--professional-navy)] transition-colors">About</a>
          <a href="#pricing" className="text-gray-600 hover:text-[var(--professional-navy)] transition-colors">Pricing</a>
          <a href="#contact" className="text-gray-600 hover:text-[var(--professional-navy)] transition-colors">Contact</a>
        </div>

        {/* Right Side - Theme Picker & CTA */}
        <div className="flex items-center gap-4">
          {/* Theme Picker */}
          <div className="hidden sm:block">
            <ThemePicker />
          </div>

          {/* CTA Button */}
          <button 
            className="text-white px-6 py-2 rounded-full text-sm font-medium transition-colors bg-[var(--trust-blue)] hover:bg-[var(--professional-navy)]"
          >
            Get Free Consultation
          </button>

          {/* Mobile Menu Button (placeholder) */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-[var(--professional-navy)]"></div>
              <div className="w-full h-0.5 bg-[var(--professional-navy)]"></div>
              <div className="w-full h-0.5 bg-[var(--professional-navy)]"></div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}