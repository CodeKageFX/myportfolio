import Profile from "./Profile"
import ProjectsComponent from "./ui/Projects/ProjectsComponent"
import SEO from "./SEO"
const Projects = () => {
  return (
    <div className="flex gap-2">
      <SEO
        title="Projects - Production-Ready Solutions | CodeKage Portfolio"
        description="Explore production-ready web applications built with React, Next.js, and TypeScript. Each project demonstrates clean architecture, scalable design, and proven results."
        keywords="web development projects, React projects, Next.js applications, TypeScript projects, production-ready apps, CodeKage portfolio, scalable web solutions"
        canonicalUrl="https://codekage.pxxl.xyz/projects"
        ogTitle="Production-Ready Web Applications by CodeKage"
        ogDescription="Real-world web applications solving real problems. See problem-solution frameworks, tech stacks, and proven results."
        ogImage="https://codekage.pxxl.xyz/images/projects.png"
        ogUrl="https://codekage.pxxl.xyz/projects"
        ogType="website"
      />
      <Profile />
      <ProjectsComponent />
    </div>
  )
}

export default Projects