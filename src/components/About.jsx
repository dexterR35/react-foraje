import bitmapImg from "../assets/aboutus.webp";
import {CallToActionPhoneButton} from "../components/Button";

const aboutTexts = [
  "Suntem o echipă de profesioniști cu peste 15 ani de experiență în foraje de adâncime, puțuri tubate și servicii de desisipare. Ne dedicăm să oferim soluții personalizate pentru fiecare tip de sol, utilizând echipamente moderne și tehnici inovatoare.",
  "Misiunea noastră este să facilităm accesul la apă curată pentru comunități și gospodării din toată țara, contribuind astfel la dezvoltarea durabilă și protejarea mediului înconjurător. Fiecare lucrare pe care o realizăm este gândită să aducă beneficii pe termen lung și să răspundă celor mai înalte standarde tehnice.",

];

const services = [
  {
    title: "Foraje Puțuri",
    paragraphs: [
      "Oferim servicii complete pentru foraje puțuri de apă, de la mică adâncime (1-30 m), medie (1-50 m) cu izolare a pânzelor de suprafață, până la mare adâncime (1-250 m).",
      "Executăm foraje pentru piloți în diverse diametre și adâncimi, foraje de epuisment, pompe de căldură, denisipări și decolmatare.",
      "De asemenea, oferim reparații, întreținere, conservare și casare foraje, montaj cabine din PVC sau beton, plus automatizări cu sisteme hidrofor și tampon.",
    ],
  },
  {
    title: "Denisiparea puțului",
    paragraphs: [
      "Denisiparea curăță nisipul și sedimentele acumulate în puț, mai ales în zona filtrului, care pot afecta funcționarea și durata de viață a puțului.",
      "Folosim metode profesionale: pompare repetată, spălare cu aer comprimat și procedee mecanice specializate, adaptate fiecărui caz în parte.",
      "Acest proces previne colmatarea, crește debitul de apă și protejează pompa împotriva uzurii premature. Verificăm puțul înainte și după intervenție.",
    ],
  },
  {
    title: "Reparații, întreținere foraje",
    paragraphs: [
      "Realizăm reparații și întreținere pentru a prelungi viața forajelor și a asigura funcționarea optimă pe termen lung.",
      "Intervenim rapid pentru remedierea defectelor, înlocuirea componentelor uzate și curățarea puțurilor, menținând performanța acestora.",
      "De asemenea, efectuăm conservarea forajelor neutilizate, prevenind degradarea și protejându-le de factori externi cu echipamente și metode moderne.",
    ],
  },
];



export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:py-8 py-2 mt-4">
      {/* HERO compact */}
      <h2 className=" font-bold text-primaryText mb-16 text-center">
        Serviciile Noastre
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="lg:w-1/1">
          <img
            src={bitmapImg}
            alt="Echipă în acţiune la foraj de puţ"
            className="w-full rounded-2xl shadow-lg object-cover max-h-96"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h3>
            Despre Echipa Noastră
          </h3>
          {aboutTexts.map((text, i) => (
            <p key={i} className="text-gray-700 font-light leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Services compact cards */}
      <div className="md:mt-20 mt-10 px-2 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map(({ title, paragraphs }, idx) => (
  <div
    key={idx}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
  >
    <div>
      <h3 className="mb-3">
        {title}
      </h3>
      {/* Afișează fiecare paragraf separat */}
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="text-gray-600 text-sm leading-snug mb-3"
        >
          {para}
        </p>
      ))}
    </div>

    {/* Buton CTA telefon */}
    <div className="mt-4 self-start">
  <CallToActionPhoneButton variant="card" />

    </div>
  </div>
))}
        </div>
      </div>

      {/* Footer note */}
      <p className="md:mt-16 mt-8 text-center text-sm italic text-gray-500 max-w-3xl mx-auto">
        * Prețurile diferă în funcție de mai multe variabile: adâncimea puțului,
        diametrul de foraj, tubulatura folosită și tipul de sol.
      </p>
    </section>
  );
}
