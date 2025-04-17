"use client"

import NavSection from "@/app/page-sections/nav-section"

export default function NavWrapper() {
  return <NavSection 
        itemsToShow={["home", "contact"]}
        linkOverrides={{ home: "/" }}
        linkLabes= {{ home: "Home" }}
   />
}
