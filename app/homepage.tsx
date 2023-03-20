"use client"

import { Avatar } from "@readyplayerme/visage"
import Image from "next/image"
import { useState } from "react"

const modelSrc = "https://models.readyplayer.me/645208d3151e836f98b9f22c.glb"

const AvatarFallback: React.ReactNode = (
  <Image
    className="m-auto"
    src="/images/profile/ReadyPlayerMe-Avatar.jpeg"
    alt="avatar"
    width={400}
    height={650}
  />
)

export default function HomePage() {
  const [Loading, setLoading] = useState(false)

  return (
    <section className="flex items-center justify-center md:flex-row flex-col h-full gap-4">
      <div className="basis-2/5 relative">
        <Avatar
          className="hover:cursor-grab active:cursor-grabbing"
          style={{ height: "650px", width: "400px", margin: "0 auto" }}
          ambientLightColor="#fff5b6"
          ambientLightIntensity={0.25}
          animationSrc="https://readyplayerme.github.io/visage/male-idle.glb"
          cameraInitialDistance={1.5}
          cameraTarget={1.55}
          dirLightColor="#002aff"
          dirLightIntensity={5}
          environment="city"
          modelSrc={modelSrc}
          onLoaded={() => setLoading(false)}
          onLoading={() => setLoading(true)}
          idleRotation={true}
          headMovement={true}
          scale={1}
          spotLightAngle={0.314}
          spotLightColor="#fff5b6"
          spotLightIntensity={1}
          loader={AvatarFallback}
        />
        {Loading && (
          <div
            className="absolute left-1/2 top-1/2 p-5 mx-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        )}
      </div>
      <div className="basis-3/5">
        <p>
          Turning Vision Into Reality With Code And Design.
          <br />
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <br />

        {/* TODO: put this intro in the about page*/}
        <p>
          Greetings! My name is Guan Yu Chen, but you can call me Kent. I am
          from Taiwan and have been a civil engineer for four years before
          transitioning to software development. As a self-taught programmer, I
          have a passion for creating software that simplifies and streamlines
          everyday tasks. I have intermediate knowledge of Python and have used
          libraries such as NumPy, Pandas, Matplotlib, TensorFlow, and OpenCV
          for machine learning and data analysis. I am also proficient in web
          development, having used React.js and Next.js for UI design and SCSS
          and TailwindCSS for styling. Additionally, I have experience creating
          RESTful APIs and GraphQL APIs using Apollo server, and am comfortable
          with data fetching and storage using MongoDB and PostgreSQL. I am
          constantly exploring new technologies and tools to further improve my
          knowledge and skills. As a committed software developer, I strive to
          deliver high-quality and user-friendly software solutions. I am eager
          to continue growing in this field and am open to any chance to
          contribute to innovative projects.
        </p>
      </div>
    </section>
  )
}
