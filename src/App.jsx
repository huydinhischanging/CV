import Sidebar from './components/Sidebar'
import Stars from './components/Stars'
import Hero from './components/Hero'
import Section from './components/Section'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Interests from './components/Interests'
import EndSection from './components/EndSection'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  return (
    <div className="app">
      <Stars />
      <Sidebar />

      <main className="main-content">
        <Hero />

        <Section id="about" title="About Me">
          <AboutMe />
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="interest" title="Interests">
          <Interests />
        </Section>

        <Section id="end" title="The End">
          <EndSection />
        </Section>
      </main>

      <BackToTop />
    </div>
  )
}

export default App
