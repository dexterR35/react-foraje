import React from "react";
import { Formik, Form, Field } from "formik";
import FormError from "../utils/error";

import { FaWhatsapp } from "react-icons/fa";
export default function ContactForm() {
  return (
    <div className="mx-auto md:mb-20 ">
      <div className="md:max-w-5xl mx-auto max-w-[90%]">
        <h2 className="font-bold text-primaryText md:mt-6 mt-2 mb-12 text-center uppercase">
          Contactează-ne
        </h2>
        <div>
        
          {/* Left: Contact Form */}
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.name.trim()) {
                errors.name = "Numele este obligatoriu";
              }
              if (!values.email.trim()) {
                errors.email = "Email-ul este obligatoriu";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Email invalid";
              }
              if (!values.message.trim()) {
                errors.message = "Te rugăm să introduci un mesaj";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("Trimis:", values);
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
                alert("Mesajul a fost trimis cu succes!");
              }, 1000);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nume complet
                  </label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Introdu numele tău"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                  <FormError name="name" />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Introdu email-ul tău"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                  <FormError name="email" />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mesaj
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Scrie mesajul tău aici..."
                    rows={5}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                  />
                  <FormError name="message" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primaryText/90  text-white font-semibold rounded-md px-6 py-3"
                >
                  {isSubmitting ? "Se trimite..." : "Trimite mesaj"}
                </button>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
}
