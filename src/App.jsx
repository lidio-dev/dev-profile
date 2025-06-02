import Menu from "./components/Menu"
import FooterMain from "./components/FooterMain"
import MainDescription from "./components/MainDescription"
import ProjectSection from "./components/ProjectSection"
import ContactSection from "./components/ContantSection"
import SkillsSection from "./components/SkillsSection"

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Menu/>
      <main className="flex-grow">
        <MainDescription/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      <FooterMain/>      
    </div>
    </>
  )
}

export default App
