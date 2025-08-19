"use client"

import { motion } from "framer-motion"
import React from "react"

export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {/* Base gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d12] via-[#0b0d12] to-[#07080a]" />

      {/* Soft radial light vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% -10%, rgba(56,189,248,0.12), transparent 60%)," +
            "radial-gradient(1000px 500px at 80% 0%, rgba(99,102,241,0.10), transparent 55%)," +
            "radial-gradient(800px 400px at 60% 100%, rgba(59,130,246,0.08), transparent 55%)",
        }}
      />

      {/* Animated blobs */}
      <motion.div
        className="absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.35), rgba(34,211,238,0.0) 60%)",
        }}
        initial={{ x: -80, y: -40, scale: 1 }}
        animate={{ x: 40, y: 20, scale: 1.08 }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute top-1/3 -right-32 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.30), rgba(99,102,241,0.0) 60%)",
        }}
        initial={{ x: 60, y: 0, scale: 1 }}
        animate={{ x: -30, y: -30, scale: 1.05 }}
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute bottom-[-12rem] left-1/3 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.28), rgba(59,130,246,0.0) 60%)",
        }}
        initial={{ x: 0, y: 20, scale: 1 }}
        animate={{ x: 20, y: -40, scale: 1.07 }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Subtle moving grid for depth */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        initial={{ backgroundPositionX: 0 }}
        animate={{ backgroundPositionX: 40 }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px, 32px 32px",
        }}
      />
    </div>
  )
}


