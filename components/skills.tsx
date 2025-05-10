"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Server, Database, Layers, Cpu, Globe, Smartphone, Cloud } from "lucide-react"

export default function Skills() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const [hoveredCategory, setHoveredCategory] = useState(null)

  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "#7C3AED",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "#3B82F6",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "NestJS", level: 70 },
        { name: "GraphQL", level: 75 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      name: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "#10B981",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Prisma", level: 75 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      name: "Architecture",
      icon: <Layers className="w-6 h-6" />,
      color: "#F59E0B",
      skills: [
        { name: "Microservices", level: 75 },
        { name: "Serverless", level: 80 },
        { name: "API Design", level: 85 },
        { name: "System Design", level: 75 },
        { name: "Performance", level: 80 },
      ],
    },
    {
      name: "DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "#EC4899",
      skills: [
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "GitHub Actions", level: 80 },
      ],
    },
    {
      name: "Testing",
      icon: <Cpu className="w-6 h-6" />,
      color: "#6366F1",
      skills: [
        { name: "Jest", level: 80 },
        { name: "React Testing Library", level: 75 },
        { name: "Cypress", level: 70 },
        { name: "Playwright", level: 65 },
        { name: "TDD", level: 75 },
      ],
    },
    {
      name: "Web Standards",
      icon: <Globe className="w-6 h-6" />,
      color: "#EF4444",
      skills: [
        { name: "Accessibility", level: 85 },
        { name: "SEO", level: 80 },
        { name: "Performance", level: 85 },
        { name: "Security", level: 75 },
        { name: "Web Vitals", level: 80 },
      ],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "#0EA5E9",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Progressive Web Apps", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Mobile UX", level: 85 },
        { name: "App Performance", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" ref={containerRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
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
            My <span className="text-primary">Skills</span>
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
            My technical toolkit spans the entire web development spectrum, allowing me to build complete solutions from
            concept to deployment.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <motion.div
                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full transition-all duration-300 ${
                  hoveredCategory && hoveredCategory !== category.name ? "opacity-50 scale-95" : ""
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 20px ${category.color}30`,
                  borderColor: `${category.color}50`,
                }}
              >
                <div
                  className="p-3 rounded-lg mb-4 w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>

                <div className="space-y-3 mt-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
