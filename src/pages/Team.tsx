import PageHero from '@/components/PageHero'
import { INDIGO, CINNABAR } from '@/lib/brand'
import { team } from '@/data/content'

export default function Team() {
  const managing = team.filter((m) => m.managing)
  const members = team.filter((m) => !m.managing)

  return (
    <div>
      <PageHero
        eyebrow="核心团队 TEAM"
        title={
          <>
            懂<span style={{ color: CINNABAR }}>技术</span>的人，
            <br />
            做最早的投资。
          </>
        }
        sub="锋润团队兼具资本视角与产业直觉，覆盖生命科学、绿色低碳、先进制造与数字科技四大赛道的早期判断与投后赋能。"
      />

      {/* 资料补充提示 */}
      <section className="mx-auto max-w-6xl px-6 pt-10 md:px-8">
        <div
          className="flex items-center gap-4 border border-dashed px-6 py-4 text-xs tracking-[0.2em] text-neutral-500"
          style={{ borderColor: `${CINNABAR}88`, background: `${CINNABAR}0D` }}
        >
          <span className="font-song font-bold" style={{ color: CINNABAR }}>注</span>
          团队成员资料正在收集中，以下为组织结构占位展示，待真实履历补充后替换。
        </div>
      </section>

      {/* 合伙人 */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:px-8">
        {managing.map((m) => (
          <article key={m.title} className="group border border-neutral-300 px-10 py-12 transition hover:shadow-lg" style={{ background: '#FEFDFA' }}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-song text-3xl font-bold tracking-[0.2em]">{m.name}</h3>
                <p className="mt-2 text-xs tracking-[0.3em]" style={{ color: CINNABAR }}>{m.title}</p>
              </div>
              <span className="writing-vertical font-song text-lg tracking-[0.4em] text-neutral-300 transition group-hover:text-neutral-500">
                {m.focus.replace(/\s·\s/g, '·')}
              </span>
            </div>
            <div className="mt-6 h-px w-16" style={{ background: INDIGO }} />
            <p className="mt-6 text-[13px] leading-8 tracking-[0.05em] text-neutral-600">{m.bio}</p>
          </article>
        ))}
      </section>

      {/* 投资团队 */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="border-t border-neutral-300">
          {members.map((m) => (
            <article
              key={m.title + m.focus}
              className="group grid gap-2 border-b border-neutral-300 px-2 py-8 transition hover:bg-white/70 md:grid-cols-[10rem_12rem_1fr] md:items-baseline"
            >
              <h3 className="font-song text-2xl font-semibold tracking-[0.2em] transition group-hover:translate-x-2">
                {m.name}
              </h3>
              <div>
                <p className="text-xs tracking-[0.25em] text-neutral-500">{m.title}</p>
                <p className="mt-1 text-[10px] tracking-[0.25em]" style={{ color: CINNABAR }}>{m.focus}</p>
              </div>
              <p className="text-[13px] leading-7 text-neutral-500">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 加入锋润 */}
      <section className="mx-auto mb-24 max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 px-10 py-14 text-white md:flex-row md:items-center md:px-14" style={{ background: INDIGO }}>
          <div>
            <h2 className="font-song text-2xl font-bold tracking-wider">加入锋润</h2>
            <p className="mt-4 max-w-xl text-sm leading-8 text-white/70">
              我们持续寻找有产业背景或研究训练的投资人。如果你愿意为一个技术细节跑三家工厂，欢迎来信。
            </p>
          </div>
          <a
            href="mailto:hr@fengrun.vc"
            className="shrink-0 border border-white/40 px-8 py-3.5 text-sm tracking-[0.3em] transition hover:bg-white hover:text-[#1B3A5C]"
          >
            hr@fengrun.vc
          </a>
        </div>
      </section>
    </div>
  )
}
