import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, type Transition } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const pageTransition: Transition = {
  duration: 0.35,
  ease: [0.16, 1, 0.3, 1],
}

export default function Layout() {
  const location = useLocation()

  return (
    <div id="app-root" className="min-h-screen bg-[#FAFDF0] flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
