import { Link } from 'react-router'
import { INDIGO, CINNABAR, PAPER } from '@/lib/brand'
import { companyFacts, coreTracks, empowerment, news, mission, cases } from '@/data/content'

export default function Home() {
  return (
    <div>
      {/* 首屏 */}
      <section className="relative mx-auto flex max-w-6xl items-center justify-between gap-12 px-6 pt-16 pb-20 md:px-8 min-h-[70vh]">
        {/* 山水线背景 */}
        <svg className="pointer-events-none absolute bottom-0 left-0 w-full opacity-60" viewBox="0 0 1440 320" fill="none">
          <path d="M0 240 C 240 180, 420 260, 720 210 S 1200 150, 1440 200" stroke={INDIGO} strokeOpacity="0.12" strokeWidth="1" />
          <path d="M0 280 C 260 230, 480 300, 760 255 S 1240 200, 1440 245" stroke={INDIGO} strokeOpacity="0.08" strokeWidth="1" />
        </svg>

        <div className="relative max-w-3xl">
          <p className="anim-fade-up mb-10 text-xs tracking-[0.6em]" style={{ color: CINNABAR }}>
            南京 · 天使轮 · 科技投资
          </p>
          <h1 className="anim-fade-up anim-delay-1 font-song text-6xl leading-[1.3] font-bold tracking-wide md:text-7xl">
            <span style={{ color: CINNABAR }}>智汇</span>资本，
            <br />
            创造价值。
          </h1>
          <div className="anim-fade-up anim-delay-2 mt-12 h-px w-24" style={{ background: INDIGO }} />
          <p className="anim-fade-up anim-delay-3 mt-8 max-w-lg text-sm leading-9 tracking-[0.15em] text-neutral-500">
            锋润基业专注天使轮科技项目投资，聚焦种子期、初创期企业。以资本赋能和资源整合，陪伴科技创业者从实验室走向产业深处。
          </p>
          <div className="anim-fade-up anim-delay-4 mt-12 flex flex-wrap items-center gap-10">
            <Link
              to="/about"
              className="px-8 py-3.5 text-sm tracking-[0.3em] text-white transition hover:opacity-90"
              style={{ background: INDIGO }}
            >
              了解锋润
            </Link>
            <Link to="/portfolio" className="border-b border-neutral-900 pb-1 text-sm tracking-[0.3em]">
              投资领域 →
            </Link>
          </div>
        </div>

        {/* 竖排题字 */}
        <div className="anim-fade-up anim-delay-3 relative hidden shrink-0 items-start gap-6 lg:flex">
          <span className="writing-vertical font-song text-2xl tracking-[0.5em] text-neutral-400">
            锋行有度 · 润泽无声
          </span>
          <span className="writing-vertical font-song text-2xl font-semibold tracking-[0.5em]" style={{ color: INDIGO }}>
            智汇资本创造价值
          </span>
          <span className="mt-2 h-full w-px self-stretch" style={{ background: `${INDIGO}33` }} />
        </div>
      </section>

      {/* 南京城市意象横幅 */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="anim-fade-up overflow-hidden border border-neutral-300">
          <img
            src="./images/hero-nanjing.jpg"
            alt="南京城市意象"
            className="h-[22rem] w-full object-cover transition duration-700 hover:scale-[1.02] md:h-[26rem]"
          />
        </div>
        <p className="mt-3 text-right text-[10px] tracking-[0.4em] text-neutral-400">
          金陵形胜 · 创新热土 — NANJING
        </p>
      </section>

      {/* 公司基本面 */}
      <section className="border-y border-neutral-300" style={{ background: '#FEFDFA' }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4 md:px-8">
          {companyFacts.map((s) => (
            <div key={s.label} className="border-l border-neutral-300 pl-6">
              <p className="text-[11px] tracking-[0.3em] text-neutral-400">{s.label}</p>
              <div className="font-song mt-2 text-3xl font-semibold md:text-4xl" style={{ color: INDIGO }}>
                {s.value}
              </div>
              <p className="mt-2 text-[11px] leading-5 text-neutral-400">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 核心赛道 */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.5em]" style={{ color: CINNABAR }}>投资领域</p>
            <h2 className="font-song mt-4 text-4xl font-bold tracking-wider">四大核心赛道</h2>
          </div>
          <span className="text-[10px] tracking-[0.4em] text-neutral-400">FOCUS AREAS</span>
        </div>
        <div className="grid gap-px border border-neutral-300 bg-neutral-300 md:grid-cols-2">
          {coreTracks.map((t) => (
            <Link
              key={t.name}
              to="/portfolio"
              className="group transition hover:bg-white"
              style={{ background: '#FBFAF6' }}
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-9 py-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-song text-2xl font-semibold tracking-[0.2em] transition group-hover:translate-x-1" style={{ color: INDIGO }}>
                    {t.name}
                  </h3>
                  <span className="text-[9px] tracking-[0.3em] text-neutral-400">{t.en}</span>
                </div>
                <p className="mt-4 text-[13px] leading-7 text-neutral-500">{t.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.subs.slice(0, 4).map((s) => (
                    <span key={s} className="border border-neutral-300 px-3 py-1 text-[10px] tracking-[0.2em] text-neutral-500">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs tracking-[0.25em] text-neutral-400">
          另设重点布局方向：<span style={{ color: CINNABAR }}>低空经济</span>——无人机研发与应用 · 低空交通 · 航空物流
        </p>
      </section>

      {/* 赋能体系 */}
      <section className="py-24" style={{ background: INDIGO }}>
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 flex items-end justify-between text-white">
            <div>
              <p className="text-xs tracking-[0.5em] text-white/50">赋能企业发展</p>
              <h2 className="font-song mt-4 text-4xl font-bold tracking-wider">全方位赋能体系</h2>
            </div>
            <span className="hidden text-[10px] tracking-[0.4em] text-white/40 md:block">EMPOWERMENT</span>
          </div>
          <div className="grid gap-px bg-white/15 md:grid-cols-3">
            {empowerment.map((e) => (
              <div key={e.no} className="px-9 py-11" style={{ background: INDIGO }}>
                <span className="font-song text-sm tracking-[0.3em] text-[#E8B4A0]">{e.no}</span>
                <h3 className="font-song mt-4 text-2xl font-semibold tracking-[0.25em] text-white">{e.title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-white/60">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 投资案例精选 */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.5em]" style={{ color: CINNABAR }}>已投项目</p>
            <h2 className="font-song mt-4 text-4xl font-bold tracking-wider">一期基金案例精选</h2>
          </div>
          <Link to="/portfolio" className="text-xs tracking-[0.3em] text-neutral-400 transition hover:text-neutral-900">
            全部案例 →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cases.slice(0, 3).map((c) => (
            <Link
              key={c.name}
              to="/portfolio"
              className="group overflow-hidden border transition hover:shadow-lg"
              style={{ background: '#FBFAF6', borderColor: c.highlight ? `${CINNABAR}66` : '#D4D0C8' }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute right-4 bottom-3 font-song text-base font-semibold text-white drop-shadow-md">
                  {c.amount}
                </span>
              </div>
              <div className="px-6 py-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-song text-lg font-semibold tracking-[0.2em] transition group-hover:translate-x-1" style={{ color: INDIGO }}>
                    {c.name}
                  </h3>
                  <span className="font-mono-num text-[10px] text-neutral-400">{c.year}</span>
                </div>
                <p className="mt-2 text-[10px] tracking-[0.25em]" style={{ color: CINNABAR }}>{c.track}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 新闻动态 */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.5em]" style={{ color: CINNABAR }}>新闻动态</p>
            <h2 className="font-song mt-4 text-4xl font-bold tracking-wider">锋润近讯</h2>
          </div>
          <Link to="/news" className="text-xs tracking-[0.3em] text-neutral-400 transition hover:text-neutral-900">
            全部动态 →
          </Link>
        </div>
        <div className="border-t border-neutral-300">
          {news.slice(0, 3).map((n) => (
            <Link
              key={n.title}
              to="/news"
              className="group flex items-center gap-6 border-b border-neutral-300 px-2 py-6 transition hover:bg-white/70"
            >
              <div className="hidden h-16 w-24 shrink-0 overflow-hidden border border-neutral-200 sm:block">
                <img
                  src={n.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <span className="font-mono-num w-20 shrink-0 text-xs text-neutral-400">{n.date}</span>
              <span className="hidden w-16 shrink-0 text-[10px] tracking-[0.3em] md:block" style={{ color: CINNABAR }}>{n.category}</span>
              <span className="font-song text-lg font-medium tracking-wide transition group-hover:translate-x-2">
                {n.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 宣言带 */}
      <section className="mx-auto mb-24 max-w-6xl px-6 md:px-8">
        <div className="px-10 py-16 text-center md:px-16" style={{ background: PAPER, border: `1px solid ${INDIGO}22` }}>
          <p className="font-song text-2xl leading-relaxed font-semibold tracking-[0.15em] md:text-3xl" style={{ color: INDIGO }}>
            「{mission}」
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs tracking-[0.4em] text-neutral-400">
            <span className="inline-block h-px w-10 bg-neutral-300" />
            锋润基业 · 使命
            <span className="inline-block h-px w-10 bg-neutral-300" />
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-block px-8 py-3.5 text-sm tracking-[0.3em] text-white transition hover:opacity-90"
            style={{ background: CINNABAR }}
          >
            递交商业计划书
          </Link>
        </div>
      </section>
    </div>
  )
}
