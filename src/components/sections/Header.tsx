import { ThemePicker } from '@/components/ui/ThemePicker';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--base-100)]/95 backdrop-blur-sm border-b border-[var(--base-300)]">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="text-xl font-bold text-[var(--secondary)]">
            ProAccounting
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-[var(--neutral)] hover:text-[var(--secondary)] transition-colors">Home</a>
          <a href="#services" className="text-[var(--neutral)] hover:text-[var(--secondary)] transition-colors">Services</a>
          <a href="#about" className="text-[var(--neutral)] hover:text-[var(--secondary)] transition-colors">About</a>
          <a href="#pricing" className="text-[var(--neutral)] hover:text-[var(--secondary)] transition-colors">Pricing</a>
          <a href="#contact" className="text-[var(--neutral)] hover:text-[var(--secondary)] transition-colors">Contact</a>
        </div>

        {/* Right Side - Theme Picker & CTA */}
        <div className="flex items-center gap-4">
          {/* Theme Picker */}
          <div className="hidden sm:block">
            <ThemePicker />
          </div>

          {/* CTA Button */}
          <button 
            className="text-[var(--primary-content)] px-6 py-2 rounded-full text-sm font-medium transition-colors bg-[var(--primary)] hover:bg-[var(--primary-hover)]"
          >
            Get Free Consultation
          </button>

          {/* Mobile Menu Button (placeholder) */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-[var(--secondary)]"></div>
              <div className="w-full h-0.5 bg-[var(--secondary)]"></div>
              <div className="w-full h-0.5 bg-[var(--secondary)]"></div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}