import { companies, testimonials } from "@/data"
import { InfiniteMovingCards } from "../ui/InfiniteMovingCard"
import Image from "next/image"

const Testimonial = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">Satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10">
          {companies.map((comp) => (
            <div key={comp.id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                src={comp.img}
                alt={comp.name}
                width={20}
                height={20}
                className="w-5 md:w-10"
              />
              <Image
                src={comp.nameImg}
                alt={comp.name}
                width={20}
                height={20}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Testimonial
