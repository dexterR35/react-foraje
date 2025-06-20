import { Helmet } from "react-helmet-async";
import bitmapImg from "../assets/bitmap.png";
import denisipariImg from "../assets/denisipari.png";
import forajeImg from "../assets/foraje.png";
import montajPompeImg from "../assets/path821.png";
import puturiImg from "../assets/path559.png";
import puturiImg2 from "../assets/path529.png";

const services = [
  {
    title: "Denisipari",
    img: denisipariImg,
  },
  {
    title: "Foraje",
    img: forajeImg,
  },
  {
    title: "Montaj Pompe",
    img: montajPompeImg,
  },
  {
    title: "Puturi",
    img: puturiImg,
  },
  {
    title: "Piloni",
    img: puturiImg2,
  },
];
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 bg-gradient-to-b from-primary/20 to-white flex items-center relative overflow-hidden flex-col justify-center space-y-24"
    >
      <Helmet>
        <title>Foraje puţuri denisipari profesionale | Apă curată și Sănătoasă</title>
      </Helmet>

      {/* Background accent shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-x-1/2 translate-y-1/3 pointer-events-none hidden md:block" />

      <div className="max-w-[85rem] mx-auto grid md:grid-cols-2 gap-5 p-8 md:p-2 items-center z-10">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-6xl font-semibold text-gray-700 max-w-[80%]">
            Servicii complete pentru o
            <span className="text-primaryText/90 font-bold"> Apă Sănătoasă și Pură</span>
          </h1>
          <p className="text-lg md:text-md text-gray-600 max-w-md">
            Peste 15 ani experienţă, echipamente moderne şi garanţie extinsă.
            Puțuri, fântâni, foraje și denisipări Contactează‑ne pentru o ofertă
            personalizată!
          </p>

          <a
            href="#contact"
            className="inline-block px-14 py-4 rounded-3xl bg-primaryText/90 text-white text-2xl font-semibold shadow-lg uppercase"
          >
           Cere ofertă
          </a>
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
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-5xl mx-auto p-4 bg-primary/10 rounded-[4rem]">
        {services.map((service, index) => (
          <div key={index} className="flex flex-row justify-center items-center text-center gap-3 ">
            <img
              src={service.img}
              alt={service.title}
              className="w-14 h-14 object-contain mb-2"
            />
            <p className="text-sm md:text-base text-gray-900 font-bold">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
