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
        title="CodeKage - Software Engineer | Production-Ready Web Solutions"
        description="Software Engineer building fast, scalable, and database-driven applications. Specializing in Go, NestJS, Node.js, Express, Docker, PostgreSQL, React, Next.js, and TypeScript."
        keywords="software engineer, backend developer, full stack developer, Go developer, NestJS, Docker, React developer, Node.js, Express, Drizzle ORM, Prisma, PostgreSQL, Next.js, TypeScript, web developer, production-ready applications, scalable web apps, CodeKage"
        canonicalUrl="https://codekage.pxxl.xyz"
        ogTitle="CodeKage - Software Engineer | Production-Ready Web Solutions"
        ogDescription="Building robust, scalable, and conversion-focused applications with Go, NestJS, Node.js, Express, Docker, PostgreSQL, React, Next.js, and TypeScript."
        ogImage="https://codekage.pxxl.xyz/images/home.png"
        ogUrl="https://codekage.pxxl.xyz"
        twitterTitle="CodeKage - Software Engineer"
        twitterDescription="Software Engineer focused on production-ready applications, database design, backend services, and delivering business results."
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