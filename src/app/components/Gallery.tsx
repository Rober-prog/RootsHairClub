import galleryImage1 from 'figma:asset/a65c4c4ea359f3e69d3074e719d22f0f480b281b.png';
import galleryImage2 from 'figma:asset/140aa56a2621c05187f0df97ea856b8c5e641adb.png';
import galleryImage3 from 'figma:asset/f47606cea0fc45b71aad8969dbf1e0137ba82a59.png';
import workImage1 from 'figma:asset/7c4290fc80222b0952cfef7c05e492638c719b96.png';
import workImage2 from 'figma:asset/af27adae04070949dc1159b25ee9b835e66312e7.png';

const workImages = [
  {
    src: workImage1,
    alt: 'Peinado ondas rubias - RootsHairClub'
  },
  {
    src: workImage2,
    alt: 'Balayage gris - RootsHairClub'
  }
];

const salonImages = [
  {
    src: galleryImage1,
    alt: 'Exterior de RootsHairClub'
  },
  {
    src: galleryImage2,
    alt: 'Interior del salón - Zona de productos'
  },
  {
    src: galleryImage3,
    alt: 'Interior del salón - Zona de trabajo'
  }
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Galería</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestro trabajo y el ambiente de nuestro salón
          </p>
        </div>

        {/* Nuestros Trabajos - Featured */}
        <div className="mb-12">
          <h3 className="mb-6 text-center">Nuestros Trabajos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl aspect-[3/4] group shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Nuestro Salón - Smaller */}
        <div>
          <h3 className="mb-6 text-center">Nuestro Salón</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {salonImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-square group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}