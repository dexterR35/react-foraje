import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const imagesModules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,svg,webp}",
  { eager: true }
);

const images = Object.values(imagesModules).map((mod, i) => ({
  original: mod.default,
  thumbnail: mod.default,
  description: `Lucrare foraj ${i + 1}`,
  originalClass: "custom-image",
  thumbnailClass: "custom-thumb",
}));

export default function Gallery() {
  const galleryRef = useRef();

  // Function to enter fullscreen mode
  const handleImageClick = () => {
    if (galleryRef.current && galleryRef.current.fullScreen) {
      galleryRef.current.fullScreen();
    }
  };

  return (
    <section
      id="gallery"
      className="max-w-auto mx-auto p-6 md:p-10 bg-gradient-to-b from-white via-white to-white rounded-xl mb-6"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primaryText/90 mb-8 drop-shadow">
        Galerie lucrări
      </h2>

      <div className="rounded-lg overflow-hidden ">
        <ImageGallery
          ref={galleryRef}
          items={images}
          showFullscreenButton={true}
          showPlayButton={false}
          showBullets={true}
          showThumbnails={true}
          thumbnailPosition="bottom"
          useBrowserFullscreen={true}
          lazyLoad={true}
          autoPlay={true}
          slideInterval={5000}
          showNav={true}
          onClick={handleImageClick} 
        />
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#contact"
          className="px-8 py-4 bg-primaryText/90 text-white text-lg transition-all duration-300 ease-in-out"
        >
          Contactează-ne pentru mai multe detalii
        </a>
      </div>
    </section>
  );
}
