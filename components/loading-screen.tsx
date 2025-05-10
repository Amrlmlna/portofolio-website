"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            <motion.div
              className="text-5xl font-bold text-white relative z-10"
              animate={{
                color: ["#7C3AED", "#9F7AEA", "#B794F4", "#7C3AED"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <span className="text-primary">&lt;</span>
              Portfolio
              <span className="text-primary">/&gt;</span>
            </motion.div>
            <motion.div
              className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div className="h-full bg-primary" initial={{ width: "0%" }} animate={{ width: `${progress}%` }} />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400"
          >
            Building experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
