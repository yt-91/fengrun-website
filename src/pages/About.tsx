import PageHero from '@/components/PageHero'
import { INDIGO, CINNABAR } from '@/lib/brand'
import { companyFacts, visions, timeline, mission } from '@/data/content'

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="关于锋润 ABOUT US"
        title={
          <>
            <span style={{ color: CINNABAR }}>智汇</span>资本，
            <br />
            创造价值。
          </>
        }
        sub="南京锋润基业创业投资有限公司成立于 2022 年，注册资本 5000 万元，位于南京市建邺区。我们专注天使轮科技项目投资，聚焦种子期、初创期企业，为其提供早期资金支持，陪伴企业成长。"
      />

      {/* 配图横幅 */}
      <section className="mx-auto max-w-6xl px-6 pt-8 md:px-8">
        <div className="overflow-hidden border border-neutral-300">
          <img
            src="/images/about-signing.jpg"
            alt="锋润基业 · 签约场景"
            className="h-64 w-full object-cover transition duration-700 hover:scale-[1.02] md:h-80"
          />
        </div>
      </section>

      {/* 公司基本信息 */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-song text-3xl font-bold tracking-wider">公司基本信息</h2>
          <span className="text-[10px] tracking-[0.4em] text-neutral-400">COMPANY PROFILE</span>
        </div>
        <div className="grid gap-px border border-neutral-300 bg-neutral-300 md:grid-cols-4">
          {companyFacts.map((f) => (
            <div key={f.label} className="px-8 py-9" style={{ background: '#FBFAF6' }}>
              <p className="text-[11px] tracking-[0.3em] text-neutral-400">{f.label}</p>
              <p className="font-song mt-3 text-2xl font-semibold" style={{ color: INDIGO }}>{f.value}</p>
              <p className="mt-3 text-[11px] leading-5 text-neutral-400">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 使命与愿景 */}
      <section className="border-y border-neutral-300 py-20" style={{ background: '#FEFDFA' }}>
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-song text-3xl font-bold tracking-wider">使命与愿景</h2>
            <span className="text-[10px] tracking-[0.4em] text-neutral-400">MISSION & VISION</span>
          </div>
          <p className="font-song mb-12 max-w-3xl text-xl leading-loose font-medium tracking-[0.1em]" style={{ color: INDIGO }}>
            「{mission}」——以资本赋能和资源整合，助力创新创业企业成长，推动行业技术进步与产业升级。
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {visions.map((v, i) => (
              <div key={v.title}>
                <span
                  className="flex h-12 w-12 items-center justify-center font-song text-lg font-bold text-white"
                  style={{ background: i === 1 ? CINNABAR : INDIGO }}
                >
                  {['生', '新', '远'][i]}
                </span>
                <h3 className="font-song mt-5 text-lg font-semibold tracking-[0.15em]">{v.title}</h3>
                <p className="mt-3 text-[13px] leading-7 text-neutral-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="font-song text-3xl font-bold tracking-wider">发展历程</h2>
          <span className="text-[10px] tracking-[0.4em] text-neutral-400">MILESTONES</span>
        </div>
        <div className="border-t border-neutral-300">
          {timeline.map((t) => (
            <div
              key={t.year}
              className="group grid gap-3 border-b border-neutral-300 px-2 py-8 transition hover:bg-white/70 md:grid-cols-[10rem_1fr] md:items-baseline"
            >
              <span className="font-song text-3xl font-semibold tracking-wider" style={{ color: INDIGO }}>
                {t.year}
              </span>
              <p className="text-sm leading-8 tracking-[0.08em] text-neutral-600 transition group-hover:translate-x-2">
                {t.event}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 合作生态 */}
      <section className="mx-auto mb-24 max-w-6xl px-6 md:px-8">
        <div className="px-10 py-14 text-white md:px-14" style={{ background: INDIGO }}>
          <h2 className="font-song text-2xl font-bold tracking-wider">合作生态</h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70">
            与上海、浙江、江苏等地多家高精尖产业园区达成深度合作，与产业链上下游企业、科研机构建立广泛连接，形成协同创新、互利共赢的产业生态体系。
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px bg-white/15 md:grid-cols-4">
            {['高精尖产业园区', '产业链上下游企业', '科研机构', '创新创业企业'].map((t) => (
              <div key={t} className="px-6 py-7 text-center text-sm tracking-[0.2em] text-white/80" style={{ background: INDIGO }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
