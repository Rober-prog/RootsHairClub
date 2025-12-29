import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from 'figma:asset/e9f3e838a3b9b267ad13df4e590279243ae5cbeb.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#galeria', label: 'Galería' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="RootsHairClub Logo" className="h-12 w-12" />
            <span className="text-2xl text-gray-900 hidden sm:block">RootsHairClub</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-rose-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+34930073464"
              className="flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Llamar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-rose-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-rose-500 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+34930073464"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Llamar
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}