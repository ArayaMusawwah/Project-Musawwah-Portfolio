"use client"
import React from "react"

import { AnimatePresence, motion } from "framer-motion"
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect"

export default function Approach() {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>
      <div className="mx-auto my-20 flex w-full flex-col items-center justify-center gap-4 px-8 lg:flex-row">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          description="Eiusmod dolore minim consequat officia eu ipsum esse ad ex nulla. Id ea laboris id qui aliqua esse quis esse nostrud in anim ad pariatur. Cillum tempor velit non officia pariatur fugiat eiusmod. In in labore veniam adipisicing. Ex aliqua fugiat tempor deserunt aute pariatur fugiat excepteur est ullamco velit ea."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          description="Do veniam mollit Lorem aliqua cupidatat. Veniam ad aute adipisicing id quis aliqua id officia nostrud elit in excepteur dolor. Ullamco elit esse culpa non commodo reprehenderit adipisicing nisi sit. Excepteur esse esse occaecat exercitation enim velit nostrud culpa nisi Lorem adipisicing."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249]
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          description="Duis eiusmod reprehenderit deserunt ex sint officia. Mollit commodo voluptate aliqua sint proident cillum est veniam tempor ad proident proident. Et exercitation proident occaecat cillum irure. Id qui voluptate qui aliquip esse irure excepteur qui tempor commodo et."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
  description?: string
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
        <h2
          className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  )
}

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-2xl font-bold text-purple backdrop-blur-3xl">
        {order}
      </span>
    </button>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
