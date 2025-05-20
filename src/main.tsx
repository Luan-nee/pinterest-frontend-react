import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.tsx'
import './resetStyle.css'
import './addTailwind.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="flex flex-row h-screen bg-gray-100">
      <Navbar />
      <section>
        <h1>Pagina Principal de pinterest</h1>
      </section>
    </main>
  </StrictMode>,
)
