"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with this developer was a game-changer for our project. Their technical expertise and attention to detail resulted in a product that exceeded our expectations. They were communicative, proactive, and delivered on time.",
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupX",
      image: "/placeholder.svg?height=100&width=100",
      text: "An exceptional developer who delivers high-quality code consistently. Their ability to understand complex requirements and translate them into elegant solutions is impressive. They're not just a developer but a true problem solver.",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead at CreativeAgency",
      image: "/placeholder.svg?height=100&width=100",
      text: "I've worked with many developers, but few have the same level of commitment to creating pixel-perfect implementations of designs while ensuring excellent performance. Their attention to detail and technical skills are outstanding.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={containerRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" style={{ opacity, scale }}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Client <span className="text-primary">Testimonials</span>
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
            Here's what clients and colleagues have to say about working with me.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="absolute inset-0 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-10"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  scale: index === activeIndex ? 1 : 0.9,
                  zIndex: index === activeIndex ? 10 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 h-full">
                  <div className="md:w-1/4 flex flex-col items-center md:items-start">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mt-4 text-center md:text-left">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400 text-center md:text-left">{testimonial.role}</p>
                  </div>

                  <div className="md:w-3/4 flex items-center">
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 text-primary/20" size={40} />
                      <p className="text-gray-300 italic pl-6">"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-primary/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-primary/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
