"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  const techStack = [
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "Express", color: "#000000" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "GraphQL", color: "#E10098" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Docker", color: "#2496ED" },
    { name: "AWS", color: "#FF9900" },
    { name: "Git", color: "#F05032" },
  ]

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
          style={{ y: y1, opacity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
          style={{ y: y2, opacity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20" style={{ opacity, scale }}>
          {/* Left Side - Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl"
                style={{ rotate }}
              />
              <motion.div
                className="absolute inset-2 bg-background rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Developer Portrait"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Floating Tech Stack */}
            <div className="absolute -right-10 top-0 bottom-0 w-full">
              {techStack.slice(0, 6).map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="absolute bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-mono border border-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    top: `${index * 16 + 5}%`,
                    right: `${(index % 3) * 20}%`,
                    color: tech.color,
                  }}
                  whileHover={{ scale: 1.1, x: -5 }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About <span className="text-primary">Me</span>
              <motion.div
                className="h-1 bg-primary mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>
                I'm a passionate fullstack developer with expertise in building modern, responsive, and user-friendly
                web applications. With a strong foundation in both frontend and backend technologies, I create seamless
                digital experiences that solve real-world problems.
              </p>
              <p>
                My journey in web development started 5 years ago, and since then, I've worked on a variety of projects
                ranging from e-commerce platforms to real-time applications. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and mentoring.
              </p>
            </motion.div>

            {/* Floating Tech Stack */}
            <div className="mt-8 relative">
              <motion.h3
                className="text-xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Tech Stack
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {techStack.slice(6).map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-mono border border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
