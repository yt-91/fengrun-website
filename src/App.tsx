import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Portfolio from '@/pages/Portfolio'
import Team from '@/pages/Team'
import News from '@/pages/News'
import Contact from '@/pages/Contact'
import { PAPER } from '@/lib/brand'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="font-hei min-h-screen text-neutral-900" style={{ background: PAPER }}>
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
