import { useState } from 'react'
import PageHero from '@/components/PageHero'
import { INDIGO, CINNABAR } from '@/lib/brand'
import { news } from '@/data/content'

const categories = ['全部', '基金动态', '投资动态', '机构动态', '机构观点']

export default function News() {
  const [active, setActive] = useState('全部')
  const list = active === '全部' ? news : news.filter((n) => n.category === active)
  const [featured, ...rest] = list

  return (
    <div>
      <PageHero
        eyebrow="新闻动态 NEWS"
        title={
          <>
            锋润<span style={{ color: CINNABAR }}>近讯</span>
          </>
        }
        sub="基金进展、投资动作、被投企业里程碑与机构观点。（内容为演示占位）"
      />

      {/* 分类筛选 */}
      <section className="mx-auto max-w-6xl px-6 pt-10 md:px-8">
        <div className="flex flex-wrap gap-8 border-b border-neutral-300 pb-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="pb-2 text-xs tracking-[0.3em] transition"
              style={{
                color: active === c ? INDIGO : '#9CA3AF',
                borderBottom: active === c ? `2px solid ${CINNABAR}` : '2px solid transparent',
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* 头条 */}
      {featured && (
        <section className="mx-auto max-w-6xl px-6 pt-12 md:px-8">
          <article className="group cursor-pointer overflow-hidden border border-neutral-300 transition hover:shadow-lg" style={{ background: '#FEFDFA' }}>
            <div className="h-64 overflow-hidden md:h-80">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="px-10 py-12">
              <div className="flex items-center gap-4 text-[10px] tracking-[0.3em]">
                <span style={{ color: CINNABAR }}>{featured.category}</span>
                <span className="h-2.5 w-px bg-neutral-300" />
                <span className="font-mono-num text-neutral-400">{featured.date}</span>
              </div>
              <h2 className="font-song mt-5 max-w-3xl text-2xl leading-relaxed font-bold tracking-wide transition group-hover:translate-x-1 md:text-3xl" style={{ color: INDIGO }}>
                {featured.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-neutral-500">{featured.summary}</p>
              <span className="mt-7 inline-block border-b border-neutral-900 pb-1 text-xs tracking-[0.3em]">
                阅读全文 →
              </span>
            </div>
          </article>
        </section>
      )}

      {/* 列表 */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="border-t border-neutral-300">
          {rest.map((n) => (
            <article
              key={n.title}
              className="group flex cursor-pointer items-center gap-6 border-b border-neutral-300 px-2 py-7 transition hover:bg-white/70"
            >
              <div className="hidden h-20 w-32 shrink-0 overflow-hidden border border-neutral-200 sm:block">
                <img
                  src={n.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <span className="font-mono-num w-20 shrink-0 text-xs text-neutral-400">{n.date}</span>
              <span className="hidden w-16 shrink-0 text-[10px] tracking-[0.3em] md:block" style={{ color: CINNABAR }}>{n.category}</span>
              <div>
                <h3 className="font-song text-lg font-semibold tracking-wide transition group-hover:translate-x-2">
                  {n.title}
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-neutral-500">{n.summary}</p>
              </div>
            </article>
          ))}
        </div>
        {rest.length === 0 && (
          <p className="py-16 text-center text-sm tracking-[0.3em] text-neutral-400">该分类暂无更多动态</p>
        )}
      </section>

      <div className="pb-24" />
    </div>
  )
}
