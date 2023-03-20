"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-14 h-14 border-4 border-slate-600 bg-slate-600 text-light flex items-center justify-center rounded-full text-xl font-semibold"
        whileHover={{
          borderColor: [
            "#475569",
            "#e75896ff",
            "rgb(43 180 19)",
            "rgba(252,176,69,1)",
            "#83c6ffff",
            "#475569"
          ],
          transition: {
            duration: 1.5,
            repeat: Infinity
          }
        }}
      >
        CGY
      </MotionLink>
    </motion.div>
  )
}

export default Logo
