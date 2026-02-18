import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const Profile = () => {
    const socials = [
        {
            icon : GithubIcon,
            href : "https://github.com/AbdulrahmanLuqman"
        },
        {
            icon : TwitterIcon,
            href : "https://x.com/luqmanola60"
        },
        {
            icon : LinkedinIcon,
            href : "https://www.linkedin.com/in/abdulrahman-luqman-80243a23a"
        }
    ]
  return (
        <div className={cn("w-1/3 h-[500px] bg-black p-6 rounded-lg shadow-md flex flex-col items-center gap-6 max-[920px]:hidden")}>
            <div className="w-[200px] h-[200px] border-2 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/assets/me.jpg" className="hover:scale-125 transition-all duration-1000 " />
            </div>
            <div className="flex flex-col gap-6">
                <div className="space-y-1">
                    <h1 className="text-xl text-[whitesmoke] font-bold">CodeKage👑</h1>
                    <p className="text-[#4770FF] font-semibold text-base">
                        Creating innovative solutions and captivating designs
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        <span className="text-white font-medium">University student by day, visionary creator by night.</span> As a <span className="text-white font-medium">self-taught developer</span>, I specialize in building production-ready applications with <span className="text-white font-medium">React, Next.js, and TypeScript</span>.
                    </p>
                </div>
    
                <div>
                    <div className="flex space-x-4">
                        {socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white bg-[#0E1018] p-2 rounded transition-all duration-200">
                                    <Icon className="w-6 h-6" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Profile