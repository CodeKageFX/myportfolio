
import Profile from "./Profile"

import AboutComponent from "./ui/About/About"
import SEO from "./SEO"
import { personSchema } from "@/lib/structuredData"

const About = () => {

  return (
    <div className="flex gap-2">
      <SEO
        title="About CodeKage - Software Engineer | Production-Ready Applications"
        description="Software Engineer specializing in building production-ready applications. Proven track record building scalable backend systems (Go, NestJS, Node.js) and frontend experiences (React, Next.js, TanStack)."
        keywords="about CodeKage, software engineer, backend developer, Go, NestJS, Docker, TanStack, production-ready applications, React developer, Next.js, Node.js, Express, Drizzle, Prisma, PostgreSQL, clean architecture, scalable web development"
        canonicalUrl="https://codekage.pxxl.xyz/about"
        ogTitle="About CodeKage - Elite Software Engineering"
        ogDescription="Building production-ready software systems that solve real business problems. Specializing in clean architecture, robust backend APIs, and scalable infrastructure."
        schema={personSchema}
      />
      <Profile />
      <AboutComponent />
    </div>
  )
}

export default About