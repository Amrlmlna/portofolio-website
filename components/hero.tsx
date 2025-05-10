"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline/next"

export default function Hero() {
  const containerRef = useRef(null)
  const [isSplineLoaded, setIsSplineLoaded] = useState(false)

  function onSplineLoad() {
    setIsSplineLoaded(true)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-background z-0"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-left order-2 lg:order-1 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-2 text-primary font-mono"
            >
              Hello, I'm
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="text-primary">&lt;</span>
              Amirul Maulana
              <span className="text-primary">/&gt;</span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-4xl font-light mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Fullstack Web Developer
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam
              pellentesque tristique arcu, non consequat magna fermentum ac.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-colors inline-block relative overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </motion.div>
          </div>

          {/* Right side - Spline 3D Model */}
          <div className="lg:w-1/2 h-[50vh] lg:h-[70vh] relative order-1 lg:order-2">
            <div className="absolute inset-0 spline-container">
              <Spline
                scene="https://prod.spline.design/1yB2dd4GAorW0Mdo/scene.splinecode"
                onLoad={onSplineLoad}
                className="spline-canvas"
              />
            </div>

            {/* Loading indicator */}
            {!isSplineLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-primary text-xl">Loading 3D Model...</div>
              </div>
            )}

            {/* Gradient overlay at the bottom to create smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-1 h-1 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
