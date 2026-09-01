import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { useI18n } from "../hooks/useI18n";
import { FaPaperPlane, FaDownload, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import CVfr from "../assets/CV-fr.pdf"; 
import CVen from "../assets/CV-en.pdf";
Modal.setAppElement("#root");

const Contact = () => {
   const { t, locale } = useI18n(); 
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
 const cvMap = {
  CVfr: CVfr,
  CVen: CVen,
};
 console.log("Current locale:", locale);
  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("Contact.errorfn")),
    lastName: Yup.string().required(t("Contact.errorln")),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t("Contact.emailformat"))
      .required(t("Contact.errorem")),
    message: Yup.string().required(t("Contact.errormsg")),
  });

  const sendEmail = (values, { resetForm }) => {
    setIsLoading(true);

    emailjs
      .send("service_6y3ju3b", "template_p7xit9o", values, "ixni1J5sAPLDKH07U")
      .then(
        () => {
          setModalMessage(t("Contact.success"));
          setIsSuccess(true);
          setIsModalOpen(true);
          resetForm();
        },
        () => {
          setModalMessage(t("Contact.fail"));
          setIsSuccess(false);
          setIsModalOpen(true);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const contactInfo = [
    { icon: <FaPhone />, label: "Phone", value: "+212 635-385-167", href: "tel:+212635385167" },
    { icon: <FaEnvelope />, label: "Email", value: "azzichaimae710@hotmail.com", href: "mailto:azzichaimae710@hotmail.com" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Oujda, Morocco", href: null },
    { icon: <FaGithub />, label: "GitHub", value: "@azzichaymae", href: "https://github.com/azzichaymae" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "Chaymae Azzi", href: "https://www.linkedin.com/in/azzichaymae" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-stone-50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-orange-500" />
            {t("Contact.label")}
            <span className="w-8 h-px bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-stone-900">
            {t("Contact.title")}
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            {t("Contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100">
              <h3 className="text-xl font-bold text-stone-900 mb-6 font-heading">
                {t("Contact.infoTitle")}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 text-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 uppercase tracking-wider">{item.label}</div>
                          <div className="font-medium text-stone-900">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-2xl">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 text-lg">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 uppercase tracking-wider">{item.label}</div>
                          <div className="font-medium text-stone-900">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CV Download Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 text-white"
            >
              <h3 className="text-lg font-bold mb-2 font-heading">{t("pdf")}</h3>
              <p className="text-stone-400 text-sm mb-6">{t("Contact.cvDesc")}</p>
              <a
                href={cvMap[t("cv")]} 
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 rounded-xl font-medium hover:bg-orange-50 transition-colors"
              >
                <FaDownload /> {t("Contact.downloadBtn")}
              </a>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-stone-50 rounded-3xl p-8 md:p-10 border border-stone-100">
              <Formik
                initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
              >
                {({ errors, touched }) => (
                  <Form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          {t("Contact.fn")}
                        </label>
                        <Field
                          name="firstName"
                          placeholder={t("Contact.fn")}
                          className={`w-full px-5 py-3.5 bg-white border rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all ${
                            errors.firstName && touched.firstName ? "border-red-300" : "border-stone-200"
                          }`}
                        />
                        <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1.5" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          {t("Contact.ln")}
                        </label>
                        <Field
                          name="lastName"
                          placeholder={t("Contact.ln")}
                          className={`w-full px-5 py-3.5 bg-white border rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all ${
                            errors.lastName && touched.lastName ? "border-red-300" : "border-stone-200"
                          }`}
                        />
                        <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1.5" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        {t("Contact.email")}
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full px-5 py-3.5 bg-white border rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all ${
                          errors.email && touched.email ? "border-red-300" : "border-stone-200"
                        }`}
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1.5" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        {t("Contact.msg")}
                      </label>
                      <Field
                        name="message"
                        as="textarea"
                        rows="5"
                        placeholder={t("Contact.msgPlaceholder")}
                        className={`w-full px-5 py-3.5 bg-white border rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none ${
                          errors.message && touched.message ? "border-red-300" : "border-stone-200"
                        }`}
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1.5" />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-stone-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t("Contact.sending")}
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          {t("Contact.send")}
                        </>
                      )}
                    </motion.button>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "400px",
            textAlign: "center",
            padding: "0",
            borderRadius: "1.5rem",
            backgroundColor: "#fff",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 100,
          },
        }}
        contentLabel="Email Status"
      >
        <div className="p-8">
          <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl ${
            isSuccess ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}>
            {isSuccess ? "✅" : "❌"}
          </div>
          <h2 className="text-xl font-bold text-stone-900 mb-2 font-heading">
            {isSuccess ? t("Contact.successTitle") : t("Contact.errorTitle")}
          </h2>
          <p className="text-stone-500">{modalMessage}</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-6 w-full bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            {t("Contact.close")}
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;