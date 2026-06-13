
import Profile from "./Profile"

import AboutComponent from "./ui/About/About"
import SEO from "./SEO"
import { personSchema } from "@/lib/structuredData"

const About = () => {

  return (
    <div className="flex gap-2">
      <SEO
        title="About CodeKage - Fullstack Engineer | Production-Ready Applications"
        description="Fullstack Engineer specializing in building production-ready web applications. Proven track record building scalable backend APIs (Node.js, Express) and frontend experiences (React, Next.js)."
        keywords="about CodeKage, fullstack engineer, backend developer, production-ready applications, React developer, Next.js, Node.js, Express, Drizzle, Prisma, PostgreSQL, clean architecture, scalable web development"
        canonicalUrl="https://codekage.pxxl.xyz/about"
        ogTitle="About CodeKage - Elite Fullstack Engineering"
        ogDescription="Building production-ready fullstack applications that solve real business problems. Specializing in clean architecture, robust backend APIs, and database modeling."
        schema={personSchema}
      />
      <Profile />
      <AboutComponent />
    </div>
  )
}

export default About