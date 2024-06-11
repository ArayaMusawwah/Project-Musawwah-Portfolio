import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "../ui/MagicButton"
import { Spotlight } from "../ui/Spotlight"
import { TextGenerateEffect } from "../ui/TextGenerateEffect"

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="animate-spotlight -left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

        <div className="dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        </div>

        <div className="relative flex justify-center">
          <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
            <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
              Jack of All Trades Developer
            </h2>

            <TextGenerateEffect
              words="transform concepts into seamless user experience"
              className="text-pretty text-center text-[40px] capitalize md:text-5xl lg:text-6xl"
            />

            <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
              Oh Hi, I&apos;m Iqbal, a React Developer based in Indonesia.
            </p>

            <a href="#about">
              <MagicButton
                title={"Show My Work"}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero