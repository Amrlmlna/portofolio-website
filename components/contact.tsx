"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Send, Github, Linkedin, Mail, MessageSquare } from "lucide-react"

export default function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    })
    // Reset form after submission
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section id="contact" ref={containerRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" style={{ opacity, scale }}>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's Build <span className="text-primary">Something Together</span>
            <motion.div
              className="h-1 bg-primary mt-2 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent peer pt-6"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-gray-400 left-4 top-4 peer-focus:text-xs peer-focus:top-2 transition-all duration-300 peer-valid:text-xs peer-valid:top-2"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent peer pt-6"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-gray-400 left-4 top-4 peer-focus:text-xs peer-focus:top-2 transition-all duration-300 peer-valid:text-xs peer-valid:top-2"
                  >
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent peer pt-6"
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-gray-400 left-4 top-4 peer-focus:text-xs peer-focus:top-2 transition-all duration-300 peer-valid:text-xs peer-valid:top-2"
                  >
                    Your Message
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message <Send size={16} />
                </motion.button>

                {formStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-md ${
                      formStatus.success ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:hello@example.com" className="text-gray-400 hover:text-primary transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900 rounded-md text-gray-400 hover:text-primary hover:bg-gray-800 transition-all"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900 rounded-md text-gray-400 hover:text-primary hover:bg-gray-800 transition-all"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Current Availability</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-300">Available for new projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
