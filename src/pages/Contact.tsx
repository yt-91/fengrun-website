import PageHero from '@/components/PageHero'
import { INDIGO, CINNABAR } from '@/lib/brand'

const channels = [
  {
    title: '递交商业计划书',
    value: 'bp@fengrun.vc',
    note: '请附一页纸说明：技术壁垒、团队构成、量产路径。我们承诺十个工作日内回复。',
  },
  {
    title: '商务与合作',
    value: 'contact@fengrun.vc',
    note: 'LP 合作、产业协同、媒体垂询。',
  },
  {
    title: '加入锋润',
    value: 'hr@fengrun.vc',
    note: '投资、投后与研究岗位的长期招聘通道。',
  },
]

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="联络我们 CONTACT"
        title={
          <>
            一封邮件，
            <br />
            也许是一次<span style={{ color: CINNABAR }}>同行</span>的开始。
          </>
        }
        sub="无论你是创业者、产业方还是未来的同事，我们都期待认真读完你的来信。（邮箱为占位示例，待替换为真实邮箱）"
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[1fr_22rem] md:px-8">
        {/* 联络渠道 */}
        <div className="border-t border-neutral-300">
          {channels.map((c) => (
            <div key={c.title} className="group border-b border-neutral-300 px-2 py-10 transition hover:bg-white/70">
              <p className="text-[10px] tracking-[0.4em] text-neutral-400">{c.title}</p>
              <a
                href={`mailto:${c.value}`}
                className="font-song mt-4 inline-block text-2xl font-semibold tracking-wide transition group-hover:translate-x-2 md:text-3xl"
                style={{ color: INDIGO }}
              >
                {c.value}
              </a>
              <p className="mt-4 max-w-xl text-[13px] leading-7 text-neutral-500">{c.note}</p>
            </div>
          ))}
        </div>

        {/* 办公室信息 */}
        <aside className="h-fit border border-neutral-300 px-9 py-10" style={{ background: '#FEFDFA' }}>
          <p className="text-[10px] tracking-[0.4em]" style={{ color: CINNABAR }}>办公室 OFFICES</p>
          <div className="mt-7 space-y-8">
            <div>
              <h3 className="font-song text-lg font-semibold tracking-[0.25em]">南京 · 总部</h3>
              <p className="mt-3 text-[13px] leading-7 text-neutral-500">
                江苏省南京市建邺区
                <br />
                白龙江东街 9 号 B6 幢三层
              </p>
            </div>
            <div className="h-px w-14" style={{ background: INDIGO }} />
            <div>
              <h3 className="font-song text-lg font-semibold tracking-[0.25em]">合作网络</h3>
              <p className="mt-3 text-[13px] leading-7 text-neutral-500">
                上海 · 浙江 · 江苏
                <br />
                多家高精尖产业园区深度合作
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* 结语 */}
      <section className="mx-auto mb-24 max-w-6xl px-6 md:px-8">
        <div className="px-10 py-14 text-center" style={{ background: INDIGO }}>
          <p className="font-song text-xl leading-relaxed font-semibold tracking-[0.15em] text-white md:text-2xl">
            「我们不缺项目源，缺的是值得押上十年的同行者。」
          </p>
          <p className="mt-6 text-[10px] tracking-[0.4em] text-white/50">锋润创投 · 期待来信</p>
        </div>
      </section>
    </div>
  )
}
