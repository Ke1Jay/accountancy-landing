export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="text-xl font-bold text-slate-800">ACCOUNTANCY</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-slate-800 transition-colors">Home</a>
          <a href="#services" className="text-gray-600 hover:text-slate-800 transition-colors">Services</a>
          <a href="#about" className="text-gray-600 hover:text-slate-800 transition-colors">About</a>
          <a href="#pricing" className="text-gray-600 hover:text-slate-800 transition-colors">Pricing</a>
          <a href="#journal" className="text-gray-600 hover:text-slate-800 transition-colors">Journal</a>
          <a href="#contact" className="text-gray-600 hover:text-slate-800 transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <button className="bg-slate-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors">
          Book Consultation
        </button>

        {/* Mobile Menu Button (placeholder) */}
        <button className="md:hidden p-2">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-slate-800"></div>
            <div className="w-full h-0.5 bg-slate-800"></div>
            <div className="w-full h-0.5 bg-slate-800"></div>
          </div>
        </button>
      </nav>
    </header>
  );
}