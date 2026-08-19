import type { ReactNode } from 'react'
import { CINNABAR, INDIGO } from '@/lib/brand'

/** 内页页眉：朱砂眉题 + 宋体大标题 + 靛青细线 */
export default function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string
  title: ReactNode
  sub?: string
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-4 md:px-8">
      <p className="anim-fade-up text-xs tracking-[0.6em]" style={{ color: CINNABAR }}>
        {eyebrow}
      </p>
      <h1 className="anim-fade-up anim-delay-1 font-song mt-6 text-5xl leading-tight font-bold tracking-wide md:text-6xl">
        {title}
      </h1>
      <div className="anim-fade-up anim-delay-2 mt-8 h-px w-24" style={{ background: INDIGO }} />
      {sub && (
        <p className="anim-fade-up anim-delay-2 mt-6 max-w-2xl text-sm leading-8 tracking-[0.12em] text-neutral-500">
          {sub}
        </p>
      )}
    </section>
  )
}
