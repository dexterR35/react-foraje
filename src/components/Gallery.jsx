import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { CallToActionPhoneButton, WhatsAppButton } from "./Button.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const styles = `

.swiper-button-next,
.swiper-button-prev {
  color: white !important;
  width: 3rem;
  height: 3rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease;
  z-index: 20;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.6);
}


.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.5rem;
  font-weight: bold;
}


.swiper-slide-thumb-active {
  border-color: #2563eb !important; /* Tailwind blue-600 */
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.7);
  transform: scale(1.1);
  z-index: 10;
}


.swiper-slide:hover {
  transform: scale(1.05);
  border-color: #3b82f6; /* Tailwind blue-500 */
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
`;

const imagesModules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,svg,webp}",
  { eager: true }
);

const images = Object.values(imagesModules).map((mod, i) => ({
  src: mod.default,
  alt: `Gallery image ${i + 1}`,
}));

export default function DynamicThumbsGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <style>{styles}</style>
      <h2 className="font-bold text-primaryText mb-4 text-center uppercase">
        Lucrările Noastre
      </h2>
      <div className="max-w-7xl  mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Container with vertical layout and centered items */}
        <div className="flex flex-col items-center space-y-8 px-4 md:px-0">
          {/* Main Image */}
          <div className="w-full max-w-7xl rounded-lg overflow-hidden shadow-lg">
            <Swiper
              modules={[Navigation, Thumbs, Autoplay]}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              className="h-[400px] md:h-[500px]"
              grabCursor
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full max-w-7xl overflow-x-auto py-2 bg-white rounded-lg border border-gray-200 flex space-x-4 px-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
              slidesPerView={Math.min(images.length, 6)}
              spaceBetween={10}
              watchSlidesProgress
              className="w-full"
              grabCursor
            >
              {images.map((img, idx) => (
                <SwiperSlide
                  key={idx}
                  className="cursor-pointer w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-300 transition duration-300"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mx-auto space-y-4">
          <h3>Suntem aici pentru tine</h3>
          <p>
            În galeria noastră vei descoperi o selecție de proiecte care
            reflectă munca și dedicarea noastră. Fiecare imagine spune povestea
            seriozității și calității cu care abordăm fiecare lucrare — de la
            foraje mici și medii, până la proiecte complexe de mare adâncime.
          </p>
          <p>
            {" "}
            Pentru noi, un puț înseamnă mai mult decât o lucrare finalizată — e
            o promisiune că vei avea apă curată și funcționare fără probleme,
            pentru mulți ani. Dă-ne un mesaj și pornim împreună pe drumul către
            un proiect reușit.
          </p>

       
          <div className="flex flex-col justify-start text-gray-700 space-y-4">
            <h3>Informații de contact</h3>
            <p>
              Preturile difera in functie de mai multe variabile cum ar fi:
              adancimea putului forat, diametru de foraj, tipul de tubulatura
              folosita dar si litologia solului.
            </p>
            <p>
              Răspundem de obicei în 24-48 de ore. Îți mulțumim pentru interes!
            </p>
            <p>
              Pentru orice detalii legate de puturi forate sau curatare puturi
              forate nu ezita sa ne contactezi la{" "}
              <a
                href="mailto:contact@exemplu.com"
                className="text-primaryText underline font-medium"
              >
                foraje-desnisipari@gmail.com
              </a>{" "}
              sau
            </p>

            <p className="flex flex-col md:flex-row gap-4">
              <CallToActionPhoneButton variant="header" />
              <WhatsAppButton variant="normal" />
            </p>
            <p>
              *București, Ilfov, Telorman, Dâmbovița, Giurgiu Ialomița, Brașov,
              Constanța, Galați, Dolj, Vâlcea.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
