import React, { Suspense } from "react";
import Loader from "./components/Loader";
import FloatingContactWidget from "./components/Widget";
import Cupon from "./components/Cupon";
import SEO from "./components/SEO";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Gallery = React.lazy(() => import("./components/Gallery"));
const Contact = React.lazy(() => import("./components/Contact"));

export default function App() {
  return (
    <>
      <SEO
        title="Foraje & Puțuri"
        description="Foraje profesionale pentru puțuri și apă potabilă."
        keywords="foraje, puțuri, apă, România"
        author="Foraje & Puțuri"
        ogImage="/og-image.jpg"
        url="https://www.denisipari-foraje.ro/"
      />
      <Suspense fallback={<Loader />}>
        <Navbar />
        <main className="flex flex-col  space-y-10 bg-primary-opacity-gradient" >
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <section id="contact">
            <Contact />
          </section>
        <Footer />
        </main>
        <FloatingContactWidget />
        <Cupon />
      </Suspense>
    </>
  );
}
