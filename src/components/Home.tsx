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
        title="CodeKage - Frontend Engineer | Production-Ready Web Solutions"
        description="Frontend Engineer building fast, scalable, and conversion-focused web applications. Specializing in React, Next.js, TypeScript, and modern frontend architectures that deliver business results."
        keywords="frontend engineer, React developer, Next.js, TypeScript, web developer, production-ready applications, scalable web apps, CodeKage, frontend architecture"
        canonicalUrl="https://codekage.pxxl.xyz"
        ogTitle="CodeKage - Frontend Engineer | Production-Ready Web Solutions"
        ogDescription="Building fast, scalable, and conversion-focused web apps with React, Next.js, and TypeScript. Delivering business results through clean code and performance optimization."
        ogImage="https://codekage.pxxl.xyz/images/home.png"
        ogUrl="https://codekage.pxxl.xyz"
        twitterTitle="CodeKage - Frontend Engineer"
        twitterDescription="Frontend Engineer focused on production-ready applications, clean architecture, and delivering business results."
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