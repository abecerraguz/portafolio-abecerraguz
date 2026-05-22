import { FooterSection } from "@/app/page-sections/footer-section"
import NavSection from "@/app/page-sections/nav-section"
import AboutSection from "@/app/page-sections/about-section"
import ExperienceSection from "@/app/page-sections/experience-section"
import BootcampSection from "@/app/page-sections/bootcamp-section"
import ProjectsSection from "@/app/page-sections/projects-section"
import EducationSection from "@/app/page-sections/education-section"
import ContactSection from "@/app/page-sections/contact-section"
import { BlogSection } from "@/app/page-sections/blog-section"
import HeroSection from "./page-sections/hero-section"
import NavWrapper from "@/components/NavWrapper"

//Esta línea activa ISR para esta página:
export const revalidate = 60

export default function Home() {
  return (
    <>
      <NavSection />
      <main id="main-content" className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <BootcampSection />
        <ProjectsSection />
        <EducationSection />
        <BlogSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
