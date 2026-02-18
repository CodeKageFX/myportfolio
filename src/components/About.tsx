
import Profile from "./Profile"

import AboutComponent from "./ui/About/About"
import SEO from "./SEO"
import { personSchema } from "@/lib/structuredData"

const About = () => {

  return (
    <div className="flex gap-2">
      <SEO
        title="About CodeKage - Frontend Engineer | Production-Ready Applications"
        description="Frontend Engineer specializing in production-ready web applications. Proven track record building scalable solutions with React, Next.js, and TypeScript. Driven by discipline and continuous improvement."
        keywords="about CodeKage, frontend engineer, production-ready applications, React developer, Next.js expert, TypeScript, clean architecture, scalable web development"
        canonicalUrl="https://codekage.pxxl.xyz/about"
        ogTitle="About CodeKage - Elite Frontend Engineering"
        ogDescription="Building production-ready applications that solve real business problems. Specializing in clean architecture, performance, and conversion-focused design."
        schema={personSchema}
      />
      <Profile />
      <AboutComponent />
    </div>
  )
}

export default About