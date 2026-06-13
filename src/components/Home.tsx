import MyExpertArea from "./ui/Home/MyExpertArea"
import Profile from "./ui/Home/Profile"
import RecentProject from "./ui/Home/RecentProject"
import WorkExperience from "./ui/Home/WorkExperience"
import Services from "./ui/Home/Services"
import Contact from "./ui/Home/Contact"
import Story from "./ui/Home/Story"
import SEO from "./SEO"
import { personSchema } from "@/lib/structuredData"

const Home = () => {
  return (
    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col max-[768px]:max-w-[400px] max-[768px]:mx-auto gap-2 h-fit ">
      <SEO
        title="CodeKage - Fullstack Engineer | Production-Ready Web Solutions"
        description="Fullstack Engineer building fast, scalable, and database-driven web applications. Specializing in Node.js, Express, Drizzle, Prisma, PostgreSQL, React, Next.js, and TypeScript."
        keywords="fullstack engineer, backend developer, React developer, Node.js, Express, Drizzle ORM, Prisma, PostgreSQL, Next.js, TypeScript, web developer, production-ready applications, scalable web apps, CodeKage, software engineer"
        canonicalUrl="https://codekage.pxxl.xyz"
        ogTitle="CodeKage - Fullstack Engineer | Production-Ready Web Solutions"
        ogDescription="Building robust, scalable, and conversion-focused fullstack apps with Node.js, Express, PostgreSQL, React, Next.js, and TypeScript."
        ogImage="https://codekage.pxxl.xyz/images/home.png"
        ogUrl="https://codekage.pxxl.xyz"
        twitterTitle="CodeKage - Fullstack Engineer"
        twitterDescription="Fullstack Engineer focused on production-ready applications, database design, backend services, and delivering business results."
        twitterImage="https://codekage.pxxl.xyz/assets/me.jpg"
        schema={personSchema}
      />
        <Profile />
        <Story />
        <WorkExperience />
        <RecentProject />
        <div className="w-full h-full -z-50">

        </div>
        <MyExpertArea />
        <Services />
        <Contact />
    </div>
  )
}

export default Home