import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import LoadingScreen from '@/components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div
        style={{
          visibility: isLoading ? 'hidden' : 'visible',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.4s ease-out',
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
