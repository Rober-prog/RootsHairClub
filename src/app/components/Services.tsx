import { Scissors, Sparkles, WandSparkles, Star } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Cortes de Cabello',
    description: 'Cortes personalizados para hombre y mujer, adaptados a tu estilo y personalidad.',
    price: 'Desde 25€'
  },
  {
    icon: Sparkles,
    title: 'Coloración',
    description: 'Tintes, mechas, balayage y técnicas de coloración más avanzadas.',
    price: 'Desde 45€'
  },
  {
    icon: WandSparkles,
    title: 'Tratamientos',
    description: 'Tratamientos capilares profesionales para revitalizar y nutrir tu cabello.',
    price: 'Desde 30€'
  },
  {
    icon: Star,
    title: 'Peinados',
    description: 'Peinados para eventos especiales, bodas y ocasiones importantes.',
    price: 'Desde 35€'
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios profesionales para cuidar y realzar tu imagen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-rose-500">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}