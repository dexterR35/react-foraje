import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import FloatingContactWidget from "./components/Widget";
import Cupon from "./components/Cupon";
// Lazy‑load major sections
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Gallery = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingContactWidget />
      <Cupon />
    </Suspense>
  );
}
