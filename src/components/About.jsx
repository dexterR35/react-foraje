import { Link } from "react-router-dom";
import bitmapImg from "../assets/aboutus.webp";

const services = [
  "Foraje puțuri",
  "Denisipări puțuri",
  "Piloți forați",
  "Puțuri absorbante",
  "Curățare fântâni",
];

const advantages = [
  "Consultanță gratuită și proiectare profesională",
  "Echipamente de ultimă generație cu vibrații reduse",
  "Echipa certificată și garanție extinsă pe lucrare",
  "Servicii rapide și eficiente în toată România",
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[95rem] mx-auto p-6 sm:p-10 md:p-16 mt-6 "
    >
      <h2 className="text-4xl md:text-4xl font-bold uppercase text-gray-900  text-center mb-12">
        Despre echipa noastră
      </h2>

      {/* Text & Image layout */}
      <div className="flex flex-col lg:flex-row gap-10 text-gray-800 leading-relaxed items-center">
        <div className="w-full lg:w-1/2">
          <img
            src={bitmapImg}
            alt="Echipă în acţiune la foraj de puţ"
            className="w-full h-auto object-cover rounded-xl shadow-md"
            width="400"
            height="250"
            loading="eager"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <p>
          <h3 className="text-2xl font-semibold text-primaryText/90">
          Despre echipa noastră
          </h3>
            Suntem o echipă de profesioniști cu peste 15 ani de experiență în
            foraje de adâncime, puțuri tubate și servicii de desisipare. Ne
            dedicăm să oferim soluții personalizate pentru fiecare tip de sol,
            utilizând echipamente moderne și tehnici inovatoare.
          </p>
          <p>
            Misiunea noastră este să asigurăm accesul la apă curată și să
            contribuim la dezvoltarea sustenabilă a comunităților din România.
          </p>
          <p>
            Suntem o echipă specializată în lucrări de foraje puțuri apă, dar
            și denisipări puțuri forate. Cu o experiență de peste 10 ani în
            domeniu vă putem ajuta cu orice lucrare de foraje puțuri.
          </p>
         
    

          <p>
          <h3 className="text-2xl font-semibold text-primaryText/90">
            Servicii prestate:
          </h3>
          Foraje puțuri,Denisipări puțuri,Piloți forați,Puțuri absorbante,Curățare fântâni</p>
       
        </div>
      </div>

      {/* Services and Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
      

        <div>
          <h3 className="text-2xl font-semibold text-primaryText/90 mb-2">
            Ce ne recomandă:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {advantages.map((item, index) => (
              <li key={`avantaj1-${index}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-primaryText/90 mb-2">
            Alte avantaje:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {advantages.map((item, index) => (
              <li key={`avantaj2-${index}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-primaryText/90 mb-2">
            Alte avantaje:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {advantages.map((item, index) => (
              <li key={`avantaj2-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <p className="text-sm text-gray-500 text-center max-w-2xl">
          * Prețurile diferă în funcție de mai multe variabile: adâncimea
          puțului, diametrul de foraj, tubulatura folosită și tipul de sol.
        </p>
      </div>
    </section>
  );
}
