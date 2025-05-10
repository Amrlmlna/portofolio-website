"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, Code } from "lucide-react"
import Tilt from "react-parallax-tilt"

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and secure payment processing. Built with a modern tech stack for optimal performance.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Real-time Chat Application",
      description:
        "A real-time messaging platform with features like user authentication, message encryption, and file sharing. Implements WebSockets for instant communication.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "AI-Powered Dashboard",
      description:
        "An analytics dashboard with AI-driven insights, data visualization, and predictive modeling. Helps businesses make data-driven decisions.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["TypeScript", "D3.js", "Python", "TensorFlow", "FastAPI"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Content Management System",
      description:
        "A headless CMS with a user-friendly interface for content creators and a robust API for developers. Supports multiple content types and localization.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "GraphQL", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" ref={containerRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
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
            Featured <span className="text-primary">Projects</span>
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
            Here are some of my recent projects that showcase my skills and expertise in fullstack development.
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Project Image */}
              <div className="lg:w-3/5">
                <Tilt
                  className="w-full"
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.02}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="all"
                >
                  <div className="relative overflow-hidden rounded-xl border border-gray-800 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-20">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 rounded-full text-white hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 rounded-full text-white hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </Tilt>
              </div>

              {/* Project Info */}
              <div className="lg:w-2/5">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-800/80 text-primary text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code size={18} />
            <span>View More Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
