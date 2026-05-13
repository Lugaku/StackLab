"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1]
        }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100 text-center">
          Start your <span className="text-zinc-500">tracking</span>
        </h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mt-4"
        />
      </motion.div>
    </main>
  )
}