import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/e9f3e838a3b9b267ad13df4e590279243ae5cbeb.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="RootsHairClub Logo" className="h-12 w-12" />
              <h3 className="text-2xl">RootsHairClub</h3>
            </div>
            <p className="text-gray-400">
              Your hair is our inspiration
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <div className="flex flex-col gap-2">
              <a href="#servicios" className="text-gray-400 hover:text-rose-400 transition-colors">
                Servicios
              </a>
              <a href="#galeria" className="text-gray-400 hover:text-rose-400 transition-colors">
                Galería
              </a>
              <a href="#nosotros" className="text-gray-400 hover:text-rose-400 transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-rose-400 transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contacto</h4>
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="tel:+34930073464" className="flex items-center gap-2 hover:text-rose-400 transition-colors">
                <Phone className="w-4 h-4" />
                930 073 464
              </a>
              <a href="https://instagram.com/rootshairclub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-rose-400 transition-colors">
                <Instagram className="w-4 h-4" />
                @rootshairclub
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>C/ Viladomat 54, 08015 Barcelona</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 RootsHairClub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}