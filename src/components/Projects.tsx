import Profile from "./Profile"
import ProjectsComponent, { getCategoryFromSearch } from "./ui/Projects/ProjectsComponent"
import SEO from "./SEO"
import { useLocation } from "react-router-dom"
import { useMemo } from "react"

const Projects = () => {
  const location = useLocation()
  const activeCategory = useMemo(() => getCategoryFromSearch(location.search), [location.search])

  const categoryTitles: Record<string, string> = {
    All: "Projects - Production-Ready Solutions | CodeKage Portfolio",
    SaaS: "SaaS Projects - Scalable Full-Stack Systems | CodeKage Portfolio",
    Contribution: "Open Source Contributions & Tools | CodeKage Portfolio",
    Clients: "Client Projects & Professional Solutions | CodeKage Portfolio",
    Practice: "Personal Experiments & Practice Projects | CodeKage Portfolio",
  }

  const categoryDescriptions: Record<string, string> = {
    All: "Explore production-ready web applications built with React, Next.js, and TypeScript. Each project demonstrates clean architecture, scalable design, and proven results.",
    SaaS: "Explore full-stack SaaS platforms built with modern technologies, focusing on user experience, scalability, and robust architecture.",
    Contribution: "Open-source contributions and community projects built to solve developer pain points and improve existing ecosystems.",
    Clients: "Tailored web applications and client solutions solving specific business needs with high-quality, maintainable code.",
    Practice: "A collection of experiments and learning projects built to explore cutting-edge technologies and master advanced concepts.",
  }

  return (
    <div className="flex gap-2">
      <SEO
        title={categoryTitles[activeCategory] || categoryTitles.All}
        description={categoryDescriptions[activeCategory] || categoryDescriptions.All}
        keywords="web development projects, React projects, Next.js applications, TypeScript projects, production-ready apps, CodeKage portfolio, scalable web solutions"
        canonicalUrl="https://codekage.pxxl.xyz/projects"
        ogTitle={categoryTitles[activeCategory] || categoryTitles.All}
        ogDescription={categoryDescriptions[activeCategory] || categoryDescriptions.All}
        ogImage="https://codekage.pxxl.xyz/images/projects.png"
        ogUrl={`https://codekage.pxxl.xyz/projects${location.search}`}
        ogType="website"
      />
      <Profile />
      <ProjectsComponent />
    </div>
  )
}

export default Projects