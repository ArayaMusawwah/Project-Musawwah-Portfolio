import Experience from "@/components/shared/Experience"
import Grid from "@/components/shared/Grid"
import Hero from "@/components/shared/Hero"
import RecentProject from "@/components/shared/RecentProject"
import Testimonial from "@/components/shared/Testimonial"
import { FloatingNav } from "@/components/ui/FloatingNavbar"
import { navItems } from "@/data"

const HomePage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 dark:bg-black-100 sm:px-10">
      <FloatingNav navItems={navItems} />
      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProject />
        <Testimonial />
        <Experience />
      </div>
    </main>
  )
}
export default HomePage
