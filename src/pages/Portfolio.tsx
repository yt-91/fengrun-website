import PageHero from '@/components/PageHero'
import { INDIGO, CINNABAR } from '@/lib/brand'
import { coreTracks, specialField, platform, cases } from '@/data/content'

export default function Portfolio() {
  return (
    <div>
      <PageHero
        eyebrow="投资领域与方向 FOCUS AREAS"
        title={
          <>
            在<span style={{ color: CINNABAR }}>最早</span>的地方，
            <br />
            投最硬的科技。
          </>
        }
        sub="我们主要投资天使轮科技项目，聚焦处于种子期、初创期的企业——为其提供早期资金支持，陪伴企业成长。"
      />

      {/* 四大核心赛道 */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-song text-3xl font-bold tracking-wider">核心投资赛道</h2>
          <span className="text-[10px] tracking-[0.4em] text-neutral-400">CORE TRACKS</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {coreTracks.map((t, i) => (
            <article key={t.name} className="group overflow-hidden border border-neutral-300 transition hover:shadow-lg" style={{ background: '#FBFAF6' }}>
              <div className="relative h-52 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="font-mono-num absolute top-4 left-5 text-xs tracking-[0.3em] text-white drop-shadow">
                  0{i + 1}
                </span>
                <span className="absolute top-4 right-5 rounded-full bg-black/30 px-3 py-1 text-[9px] tracking-[0.3em] text-white backdrop-blur-sm">
                  {t.en}
                </span>
              </div>
              <div className="px-9 py-9">
                <h3 className="font-song text-3xl font-bold tracking-[0.2em] transition group-hover:translate-x-1" style={{ color: INDIGO }}>
                  {t.name}
                </h3>
                <p className="mt-5 text-[13px] leading-8 text-neutral-500">{t.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.subs.map((s) => (
                    <span key={s} className="border border-neutral-300 px-3 py-1.5 text-[10px] tracking-[0.2em] text-neutral-500">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 低空经济重点方向 */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <div className="relative overflow-hidden px-10 py-14 text-white md:px-14" style={{ background: INDIGO }}>
          <img
            src="/images/low-altitude.jpg"
            alt="低空经济"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${INDIGO}F2 20%, ${INDIGO}99 100%)` }} />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-white/50">重点布局方向 KEY FOCUS</p>
              <h3 className="font-song mt-4 text-3xl font-bold tracking-[0.25em]">
                {specialField.name}
                <span className="ml-4 align-middle text-[10px] tracking-[0.3em] text-white/40">{specialField.en}</span>
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">{specialField.desc}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {specialField.subs.map((s) => (
                <span key={s} className="border border-white/30 px-4 py-2 text-xs tracking-[0.25em] text-white/85">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 一站式服务平台 */}
      <section className="border-t border-neutral-300 py-20" style={{ background: '#FEFDFA' }}>
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-song text-3xl font-bold tracking-wider">一站式服务平台</h2>
            <span className="text-[10px] tracking-[0.4em] text-neutral-400">ONE-STOP PLATFORM</span>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {platform.map((p) => (
              <div key={p.no}>
                <span className="font-song text-4xl font-semibold" style={{ color: `${INDIGO}55` }}>{p.no}</span>
                <h3 className="font-song mt-4 text-xl font-semibold tracking-[0.2em]">{p.title}</h3>
                <div className="mt-4 h-px w-12" style={{ background: CINNABAR }} />
                <p className="mt-4 text-[13px] leading-7 text-neutral-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 已投项目 */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-song text-3xl font-bold tracking-wider">已投项目</h2>
          <span className="text-[10px] tracking-[0.4em] text-neutral-400">PORTFOLIO</span>
        </div>
        <p className="mb-10 text-xs leading-6 tracking-[0.2em] text-neutral-400">
          一期基金已投 6 个天使轮项目，累计出资 2300 万元。
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.name}
              className="group overflow-hidden border transition hover:shadow-lg"
              style={{ background: '#FBFAF6', borderColor: c.highlight ? `${CINNABAR}66` : '#D4D0C8' }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                {c.highlight && (
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-[0.25em] text-white"
                    style={{ background: CINNABAR }}
                  >
                    最大单笔投资
                  </span>
                )}
                <span className="absolute right-4 bottom-4 font-song text-lg font-semibold text-white drop-shadow-md">
                  {c.amount}
                </span>
              </div>
              <div className="px-7 py-7">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-song text-xl font-semibold tracking-[0.2em] transition group-hover:translate-x-1" style={{ color: INDIGO }}>
                    {c.name}
                  </h3>
                  <span className="font-mono-num text-[10px] text-neutral-400">{c.year}</span>
                </div>
                <p className="mt-2 text-[10px] tracking-[0.25em]" style={{ color: CINNABAR }}>{c.track}</p>
                <p className="mt-4 text-[13px] leading-7 text-neutral-500">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-7 tracking-[0.25em] text-neutral-400">
          如果你的企业正在四大核心赛道或低空经济方向创业，
          <a href="mailto:bp@fengrun.vc" className="border-b pb-0.5 transition hover:text-neutral-700" style={{ color: CINNABAR, borderColor: CINNABAR }}>
            欢迎递交商业计划书
          </a>
        </p>
      </section>

      <div className="pb-16" />
    </div>
  )
}
