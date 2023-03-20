import Image from "next/image"
import { SVGProps, FC } from "react"

import Twitter from "@/public/images/svgs/twitter.svg"
import Github from "@/public/images/svgs/logo-github.svg"
import LinkedIn from "@/public/images/svgs/linkedin.svg"

type Props = { className?: string; rest?: SVGProps<SVGElement>[] }

export const TwitterIcon: FC<Props> = ({ className, ...rest }) => {
  return (
    <Image
      priority
      src={Twitter}
      alt="twitter icon"
      className={`w-full h-auto ${className}`}
      {...rest}
    />
  )
}

export const GithubIcon: FC<Props> = ({ className, ...rest }) => {
  return (
    <Image
      priority
      src={Github}
      alt="github icon"
      className={`w-full h-auto ${className}`}
      {...rest}
    />
  )
}

export const LinkedInIcon: FC<Props> = ({ className, ...rest }) => {
  return (
    <Image
      priority
      src={LinkedIn}
      alt="linkedin icon"
      className={`w-full h-auto ${className}`}
      {...rest}
    />
  )
}
