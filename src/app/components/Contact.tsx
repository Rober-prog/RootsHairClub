import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Contacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visítanos o contáctanos para reservar tu cita
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="mb-2">Dirección</h3>
                  <p className="text-gray-600">
                    C/ Viladomat 54<br />
                    08015 Barcelona, Spain
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="mb-2">Teléfono</h3>
                  <a
                    href="tel:+34930073464"
                    className="text-gray-600 hover:text-rose-500 transition-colors"
                  >
                    930 073 464
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="mb-2">Horario</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Lunes - Viernes: 10:00 - 20:00</p>
                    <p>Sábados: 10:00 - 18:00</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="mb-2">Redes Sociales</h3>
                  <a
                    href="https://instagram.com/rootshairclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-500 transition-colors"
                  >
                    @rootshairclub
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    1173 seguidores • 398 publicaciones
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="mb-4">Ubicación</h3>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.7347842838875!2d2.1541!3d41.3788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f1b3c5d1ab%3A0x1234567890abcdef!2sCarrer%20de%20Viladomat%2C%2054%2C%2008015%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación RootsHairClub"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}