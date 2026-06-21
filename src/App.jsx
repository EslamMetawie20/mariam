import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectOverview from './components/ProjectOverview'
import DesignConcept from './components/DesignConcept'
import ProjectGallery from './components/ProjectGallery'
import CV from './components/CV'
import QRSection from './components/QRSection'
import Footer from './components/Footer'

/* ----------------------------------------------------------------------------
   App — assembles all sections in order.
   To reorder/remove a section, just move/delete its line below.
   ---------------------------------------------------------------------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-navy-deep">
      <Navbar />

      <main>
        <Hero />
        <ProjectOverview />
        <DesignConcept />
        <ProjectGallery />
        <CV />
        <QRSection />
      </main>

      <Footer />
    </div>
  )
}
