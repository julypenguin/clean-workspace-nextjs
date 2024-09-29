import Header from '@templates/views-demo/layout/Header'
import Footer from '@templates/views-demo/layout/Footer'
import { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'

export default function DemoLayout({ children, hideHeader, hideFooter }: { children: ReactNode; hideHeader?: boolean; hideFooter?: boolean }) {
  return (
    <>
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </>
  )
}
