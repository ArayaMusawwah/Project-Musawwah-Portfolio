import { cn } from "@/utils/cn"
import Image from "next/image"
import { BackgroundGradientAnimation } from "./GradientBg"

interface IBentoGridItem {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  id?: number
  img?: string
  imgClassName: string
  titleClassName?: string
  spareImg?: string
}

export const BentoGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: IBentoGridItem) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}
    >
      <div className={`${id === 6 && "flex h-full justify-center"} `}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              src={img!}
              alt={img!}
              height={400}
              width={400}
              className={cn(imgClassName, "object-cover", "object-center")}
            />
          )}
        </div>

        <div
          className={`absolute -bottom-5 right-0 ${id === 5 && "w-full opacity-80"}`}
        >
          {img && (
            <Image
              src={spareImg!}
              alt={spareImg!}
              height={400}
              width={400}
              className={"h-full w-full object-cover object-center"}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10"
          )}
        >
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>

          <div className="z-10 max-w-96 font-sans font-bold lg:text-3xl">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}
