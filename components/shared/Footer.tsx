import Image from "next/image"
import Link from "next/link"
import MagicButton from "../ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"
import { socialMedia } from "@/data"

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden py-20" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full overflow-hidden">
        <Image
          src={"/footer-grid.svg"}
          alt=""
          className="h-full w-full opacity-50"
          height={1000}
          width={1000}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to Take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          react out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:miramadhan876@gmail.com">
          <MagicButton
            title="Let's get in touch"
            position="right"
            icon={<FaLocationArrow />}
          />
        </Link>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between gap-y-4 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright© 2024 Arμ&apos;s Group&reg;. All Right Reserved.
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-100 backdrop-blur-lg backdrop-filter"
            >
              <Image
                src={profile.img}
                alt={String(profile.id)}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer
