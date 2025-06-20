import React from "react";
import { Formik, Form, Field } from "formik";
import FormError from "../utils/error"; // Your existing component

export default function ContactForm() {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center col-span-2">
        Contactează-ne
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  placeholder="marian.iordache@gmail.ro"
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
                className="w-full bg-primaryText/90 hover:bg-primary-dark text-white font-semibold rounded-md px-6 py-3 transition disabled:opacity-50"
              >
                {isSubmitting ? "Se trimite..." : "Trimite mesaj"}
              </button>
            </Form>
          )}
        </Formik>

        {/* Right: Text/Information Panel */}
        <div className="flex flex-col justify-start text-gray-700 space-y-4">
          <h3 className="text-2xl font-semibold text-primary">
            Informații de contact
          </h3>
          <p>
            Ne poți contacta folosind formularul alăturat sau prin email direct
            la:{" "}
            <a
              href="mailto:contact@exemplu.com"
              className="text-primary underline"
            >
              contact@exemplu.com
            </a>
            .
          </p>
          <p>
            Răspundem de obicei în 24-48 de ore. Îți mulțumim pentru interes!
          </p>
          <p>
            Pentru orice detalii legate de puturi forate sau curatare puturi
            forate nu ezita sa ne contactezi.
          </p>
          <p>
            Preturile difera in functie de mai multe variabile cum ar fi:
            adancimea putului forat, diametru de foraj, tipul de tubulatura
            folosita dar si litologia solului.
          </p>
          <div>
            <p>
              <strong>Adresa:</strong>
            </p>
            <p>Strada Exemplu, Nr. 123</p>
            <p>București, România</p>
          </div>
        </div>
      </div>
    </section>
  );
}
