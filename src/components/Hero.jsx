import bitmapImg from "../assets/bitmap.png";

import {CallToActionPhoneButton} from "./Button.jsx";

const advantages = [
  {
    icon: "💧",
    text: "Sursă subterană sigură de apă pură, independentă de rețelele publice.",
  },
  {
    icon: "💸",
    text: "Economii importante prin eliminarea facturilor lunare.",
  },
  {
    icon: "🌱",
    text: "Ideal pentru irigare continuă în grădină și agricultură.",
  },
  { icon: "🏡", text: "Completează autonomia pentru locuințe și ferme." },
  {
    icon: "🔧",
    text: "Fiabilitate și durabilitate pe termen lung a echipamentelor.",
  },
];
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen md:pt-20 flex items-center relative overflow-hidden flex-col justify-center md:space-y-20"
    >
      {/* Background accent shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-x-1/2 translate-y-1/3 pointer-events-none hidden md:block" />

      <div className="max-w-[85rem] mx-auto md:grid md:grid-cols-2 gap-5 p-8 md:p-2 items-center z-10 flex flex-col-reverse">
        {/* Text Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-700 max-w-[95%] md:max-w-[80%]">
            Servicii complete pentru o
            <span className="text-primaryText/90 font-bold">
              {" "}
              Apă Sănătoasă și Pură
            </span>
          </h1>
          <p className="text-md md:text-md text-gray-600 max-w-md">
            Peste 15 ani experienţă, echipamente moderne şi garanţie extinsă.
            Puțuri, fântâni, foraje și denisipări Contactează‑ne pentru o ofertă
            personalizată!
          </p>
          <CallToActionPhoneButton variant="hero"/>
        </div>

        {/* Image with caption */}
        <div className="relative group">
          <img
            src={bitmapImg}
            alt="Echipă în acţiune la foraj de puţ"
            className="w-full rounded-3xl"
            width="800"
            height="650"
            loading="eager"
          />
        </div>
      </div>
      <div className="md:mb-20 md:max-w-[100rem] max-w-7xl mx-auto m-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-8 gap-4">
          {advantages.map(({ icon, text }, i) => (
            <div
              key={i}
              className="flex flex-row items-center py-6 px-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-start gap-4"
            >
              <div className="text-3xl">{icon}</div>
              <p className="text-gray-700 font-medium text-[0.95rem]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
