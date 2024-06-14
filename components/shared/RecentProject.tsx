import { projects } from "@/data"
import Image from "next/image"
import { FaLocationArrow } from "react-icons/fa"
import { PinContainer } from "../ui/3d-pin"

const RecentProject = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="sm:h[41rem] flex h-[32.5rem] w-[80vw] items-center justify-center sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer title={p.link} href={p.link}>
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                  <Image src={"/bg.png"} alt={"bg-img"} fill />
                </div>

                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="absolute bottom-0 z-10"
                />
              </div>

              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {p.title}
              </h1>

              <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                {p.des}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {p.iconLists.map((icon, i) => (
                    <div
                      key={i}
                      className="flex size-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:size-10"
                      style={{
                        transform: `translateX(-${5 * i * 2}px)`
                      }}
                    >
                      <Image src={icon} alt={icon} fill className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex text-purple md:text-xs lg:text-xl">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RecentProject
