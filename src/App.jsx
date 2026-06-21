import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectOverview from './components/ProjectOverview'
import DesignConcept from './components/DesignConcept'
import ProjectGallery from './components/ProjectGallery'
import CV from './components/CV'
import QRSection from './components/QRSection'
import PDFSection from './components/PDFSection'
import Footer from './components/Footer'
import WaveDivider from './components/ui/WaveDivider'

/* ----------------------------------------------------------------------------
   App — assembles all sections in order.
   WaveDividers create soft transitions between light & dark sections.
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

        {/* dark → light transition into PDF */}
        <WaveDivider className="text-beige -mb-1" />
        <PDFSection />
        <WaveDivider flip className="text-beige -mt-1" />
      </main>

      <Footer />
    </div>
  )
}
