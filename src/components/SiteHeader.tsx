import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { INDIGO, CINNABAR, PAPER } from '@/lib/brand'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于锋润' },
  { to: '/portfolio', label: '投资领域' },
  { to: '/team', label: '核心团队' },
  { to: '/news', label: '新闻动态' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-40 border-b border-neutral-200/80 backdrop-blur-xl"
      style={{ background: `${PAPER}E6` }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className="flex h-8 w-8 items-center justify-center font-song text-sm font-bold text-white"
            style={{ background: CINNABAR }}
          >
            锋
          </span>
          <span className="font-song text-lg font-semibold tracking-[0.25em]">锋润基业</span>
          <span className="hidden text-[9px] tracking-[0.3em] text-neutral-400 sm:inline">
            FENGRUN CAPITAL
          </span>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-9 text-[13px] tracking-[0.25em] text-neutral-500 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `transition hover:text-neutral-900 ${isActive ? 'text-neutral-900' : ''}`
              }
              style={({ isActive }) =>
                isActive ? { borderBottom: `1px solid ${CINNABAR}`, paddingBottom: 4 } : {}
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 text-[13px] tracking-[0.25em] text-white transition hover:opacity-90"
            style={{ background: INDIGO }}
          >
            联络我们
          </Link>
        </nav>

        {/* 移动端按钮 */}
        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          <span className={`h-px w-5 bg-neutral-800 transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-5 bg-neutral-800 transition ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* 移动端菜单 */}
      {open && (
        <nav className="border-t border-neutral-200 px-6 py-4 md:hidden" style={{ background: PAPER }}>
          {[...navItems, { to: '/contact', label: '联络我们' }].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm tracking-[0.25em] ${isActive ? 'font-medium text-neutral-900' : 'text-neutral-500'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
