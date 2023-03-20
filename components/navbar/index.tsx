"use client"

import { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "../Logo"
import { TwitterIcon, GithubIcon, LinkedInIcon } from "../Icons"
import { motion } from "framer-motion"

type CustomLinkProps = {
  href: string
  title: string
  className?: string
}

const CustomLink: FC<CustomLinkProps> = ({ href, title, className = "" }) => {
  const pathName = usePathname()

  return (
    <Link className={`${className} group`} href={href}>
      {title}
      <div
        className={`h-[2px] mx-auto w-0 bg-dark -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : ""
        }`}
      />
    </Link>
  )
}

const Navbar: FC = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex">
        <CustomLink href="/" title="Home" className="mx-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/cgyinthehouse"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
