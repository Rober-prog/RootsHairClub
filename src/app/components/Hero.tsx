import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/a65c4c4ea359f3e69d3074e719d22f0f480b281b.png';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="RootsHairClub Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="mb-6 text-5xl md:text-7xl tracking-tight">
          RootsHairClub
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-gray-200">
          Tu estilo, nuestra pasión
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-4 bg-rose-500 hover:bg-rose-600 transition-colors rounded-lg"
          >
            Reservar Cita
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors rounded-lg border border-white/30"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}