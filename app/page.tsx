import { FooterSection } from "@/app/page-sections/footer-section"
import NavSection from "@/app/page-sections/nav-section"
import AboutSection from "@/app/page-sections/about-section"
import ProjectsSection from "@/app/page-sections/projects-section"
import EducationSection from "@/app/page-sections/education-section"
import ContactSection from "@/app/page-sections/contact-section"
import { BlogSection } from "@/app/page-sections/blog-section"
import HeroSection from "./page-sections/hero-section"
import NavWrapper from "@/components/NavWrapper" 

export default function Home() {

  return (

 
        <>
        <NavSection/>
          <HeroSection/>
          <AboutSection/>
          <ProjectsSection/>
          <EducationSection/>
          <BlogSection/>
          <ContactSection/>
        <FooterSection/>
        </>

      
  
 
  )
}


    {/* <NavSection/>
      <BlogSection/>
      <FooterSection/>
               // <BlogSection/>
      */}