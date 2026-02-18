import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon, MessageCircleIcon, ArrowRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Button } from "../button"
import { Link } from "react-router-dom"

const Profile = () => {  
    // const [isSticky, setIsSticky] = useState(false)

//       useEffect(() => {
//     const handleScroll = () => {
//       if (!profileRef.current) return;
      
//       const sectionBottom = profileRef.current.getBoundingClientRect().bottom;
//       // 500 = height of the Profile card, adjust if needed
//       setIsSticky(sectionBottom > 500);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [profileRef]);
    const socials = [
        {
            icon : GithubIcon,
            href : "https://github.com/CodeKageFX/",
            label: "GitHub"
        },
        {
            icon : TwitterIcon,
            href : "https://x.com/codekagefx",
            label: "Twitter"
        },
        {
            icon : LinkedinIcon,
            href : "https://www.linkedin.com/in/codekage-fx-80243a23a/",
            label: "LinkedIn"
        },
        {
            icon : MailIcon,
            href : "mailto: luqmanola60@gmail.com",
            label: "Email"
        },
        {
            icon : MessageCircleIcon,
            href : "https://wa.me/2349167596491", // Update this with your actual number if different
            label: "WhatsApp"
        }
    ]
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={cn("w-full h-[500px] bg-black p-6 rounded-lg shadow-md flex flex-col items-center gap-4 row-span-2")}
    >
        <div className="w-[160px] h-[200px] border-2 rounded-full py-6 overflow-hidden flex items-center justify-center border-gray-800">
            <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src="/assets/me.jpg" 
                alt="CodeKage - Frontend Engineer"
                className="transition-all duration-1000" 
            />
        </div>
        <div className="flex flex-col gap-5 flex-1 justify-between">
            <div className="space-y-3">
                <div className="space-y-2">
                    <h1 className="text-2xl text-white font-bold leading-tight">
                        Frontend Engineer
                    </h1>
                    <p className="text-[#4770FF] font-semibold text-lg">
                        Building fast, scalable, and conversion-focused web apps
                    </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                    I build modern web applications using <span className="text-white font-medium">React, Next.js, TypeScript</span>, and scalable frontend architectures. Focused on <span className="text-white font-medium">clean code, performance,</span> and delivering <span className="text-white font-medium">business results</span>.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
                <Link to="/contact" className="w-full">
                    <Button className={cn("w-full bg-[#4770FF] hover:bg-[#3d5fd9] text-white font-semibold group")}>
                        <span>Let's Work Together</span>
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
                <Link to="/projects" className="w-full">
                    <Button variant="outline" className={cn("w-full border-gray-700 text-gray-300 hover:text-white hover:border-[#4770FF] hover:bg-transparent")}>
                        View My Work
                    </Button>
                </Link>
            </div>

            {/* Social Links */}
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Connect</p>
                <div className="flex flex-wrap gap-2">
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.a 
                                whileHover={{ y: -2, scale: 1.05 }}
                                key={index} 
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-white hover:bg-[#1a1d28] bg-[#0E1018] p-2 rounded transition-all duration-200 border border-gray-900 hover:border-[#4770FF]"
                                title={social.label}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Profile