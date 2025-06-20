import React from "react";
import { FaPhone, FaCommentDots, FaWhatsapp } from "react-icons/fa";

// Shared phone number constant
const PHONE_NUMBER = "40749999999";

export function CallToActionPhoneButton({ variant = "hero" }) {
  let content, classes, iconSize, label;

  switch (variant) {
    case "card":
      classes =
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primaryText text-white text-sm font-semibold shadow-md hover:bg-primaryText/90 transition-colors duration-300";
      iconSize = "w-4 h-4";
      label = "Află mai multe";
      content = (
        <>
          <FaCommentDots className={iconSize} />
          {label}
        </>
      );
      break;

    case "widget":
      classes = "group flex items-center gap-3";
      iconSize = "w-5 h-5";
      label = (
        <div className="px-3 py-1 bg-primaryText/90 text-white rounded-lg shadow hidden sm:block text-md font-medium group-hover:scale-105 transition-transform">
          Sună-ne acum
        </div>
      );
      content = (
        <>
          {label}
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primaryText/90 text-white shadow-xl hover:scale-105 transition-transform">
            <FaPhone className={iconSize} />
          </div>
        </>
      );
      break;

    case "header":
      classes =
        "inline-flex items-center justify-center gap-3 px-5 py-2 rounded-xl bg-white text-primaryText text-sm font-medium border border-primaryText hover:bg-primaryText hover:text-white transition-transform hover:scale-105";
      iconSize = "w-4 h-4";
      label = "Sună 0754.112.441";
      content = (
        <>
          <FaPhone className={iconSize} />
          {label}
        </>
      );
      break;

    case "hero":
    default:
      classes =
        "inline-flex items-center justify-center gap-3 px-14 py-4 rounded-xl bg-primaryText/90 text-white text-xl md:w-[inherit] w-full font-semibold shadow-lg uppercase transition-transform hover:scale-105";
      iconSize = "w-6 h-6";
      label = "Sună-ne acum";
      content = (
        <>
          <FaPhone className={iconSize} />
          {label}
        </>
      );
      break;
  }

  return (
    <a href={`tel:+${PHONE_NUMBER}`} className={classes} aria-label="Sună-ne">
      {content}
    </a>
  );
}

export function WhatsAppButton({ variant = "widget", phone = PHONE_NUMBER }) {
  const baseHref = `https://wa.me/${phone}`;

  switch (variant) {
    case "widget":
      return (
        <a
          href={baseHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3"
          aria-label="Scrie-ne pe WhatsApp"
        >
          <div className="px-3 py-1 bg-green-500 text-white rounded-lg shadow hidden sm:block text-md font-medium group-hover:scale-105 transition-transform">
            Scrie-ne pe WhatsApp
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-105 transition-transform">
            <FaWhatsapp className="w-6 h-6" />
          </div>
        </a>
      );

    case "normal":
      return (
        <a
          href={baseHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2inline-flex justify-center gap-3 px-5 py-2 rounded-xl bg-white text-green-600 text-md font-medium border border-green-600 hover:bg-green-600 hover:text-white transition-transform hover:scale-105"
          aria-label="Scrie-ne pe WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span>WhatsApp</span>
        </a>
      );

    default:
      return null;
  }
}
