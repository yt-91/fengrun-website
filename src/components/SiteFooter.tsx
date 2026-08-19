import { Link } from 'react-router'
import { INDIGO, CINNABAR } from '@/lib/brand'

export default function SiteFooter() {
  return (
    <footer className="text-white" style={{ background: INDIGO }}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center font-song text-sm font-bold text-white"
                style={{ background: CINNABAR }}
              >
                锋
              </span>
              <span className="font-song text-lg font-semibold tracking-[0.25em]">锋润创投</span>
            </div>
            <p className="font-song mt-6 text-xl leading-relaxed tracking-[0.1em] text-white/85">
              智汇资本，创造价值。
            </p>
            <p className="mt-3 max-w-sm text-xs leading-6 text-white/50">
              专注天使轮科技项目投资，聚焦种子期、初创期企业，以资本赋能和资源整合陪伴科技创业者成长。
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.4em] text-white/40">导航 NAVIGATE</p>
            <div className="mt-5 space-y-3 text-sm tracking-[0.2em] text-white/75">
              {[
                ['/', '首页'],
                ['/about', '关于锋润'],
                ['/portfolio', '投资领域'],
                ['/news', '新闻动态'],
                ['/contact', '联络我们'],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="block transition hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.4em] text-white/40">联络 CONTACT</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/75">
              <p>南京市建邺区白龙江东街 9 号 B6 幢三层</p>
              <p>BP 投递：bp@fengrun.vc</p>
              <p>合作联络：contact@fengrun.vc</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-[10px] tracking-[0.3em] text-white/40 md:flex-row">
          <span>© 2026 南京锋润基业创业投资有限公司</span>
          <span>苏ICP备XXXXXXXX号 · 本网站内容仅供信息展示，不构成任何投资建议</span>
        </div>
      </div>
    </footer>
  )
}
