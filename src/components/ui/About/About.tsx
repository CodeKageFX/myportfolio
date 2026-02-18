import { Button } from "../button"
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon, DotIcon, MedalIcon, TrophyIcon } from "lucide-react"
import { motion } from "motion/react"

const AboutComponent = () => {
    const feats = [
        {
            number: 3,
            what: "Years of Experience"
        },
        {
            number: 10,
            what: "Projects Shipped"
        },
        {
            number: 5,
            what: "Technologies Mastered"
        }
    ]
    
    const awards = [
        {
            title: "Bincom Hackathon 2025",
            year: 2025,
            position: "Runner-Up",
            linkToSolution: "https://note-taking-orcin.vercel.app/dashboard",
            description: "Built Noter - A production-ready note-taking application"
        },
        {
            title: "Google AI Hackathon",
            year: 2025,
            position: "Participant",
            linkToSolution: "https://banana-edit-eight.vercel.app/",
            description: "Created AI-powered image editing tool"
        },
        {
            title: "SUI Hackathon",
            year: 2025,
            position: "Participant",
            linkToSolution: "https://sui-thrift.vercel.app/",
            description: "A Decentralized Cooperative Savings on Sui"
        }
    ]

    return (
        <div className="w-2/3 h-[500px] max-[920px]:min-h-screen max-[920px]:w-full bg-black px-6 py-8 md:px-8 rounded-lg space-y-8 overflow-auto">
            <div className="space-y-3">
                <div className="flex justify-between items-center flex-wrap-reverse gap-2">
                    <h2 className="text-3xl max-[629px]:text-xl font-semibold">
                        Frontend Engineer
                        <span className="text-[#4770FF]"> | CodeKage</span>
                    </h2>
                    <motion.span
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex gap-2 max-[510px]:gap-0 items-center bg-[#0E1018] rounded-lg font-semibold py-1 px-3 max-[629px]:px-2 w-fit text-[#4770FF] border border-[#4770FF]/30"
                    >
                        <DotIcon className="animate-pulse w-10 h-10" />
                        <span className="text-center max-[510px]:text-sm">Available For Hire</span>
                    </motion.span>
                </div>
                <p className="text-lg max-[629px]:text-base min-[484px]:w-[450px] w-full text-gray-300 leading-relaxed">
                    Building <span className="font-bold text-white">production-ready web applications</span> that solve real business problems. 
                    I specialize in <span className="font-bold text-white">React, Next.js, and TypeScript</span>, with a focus on 
                    <span className="font-bold text-white"> clean architecture, performance optimization,</span> and 
                    <span className="font-bold text-white"> conversion-focused design</span>.
                </p>
                <p className="text-sm text-gray-500 italic">
                    Driven by discipline, analytical thinking, and a commitment to continuous improvement.
                </p>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 flex-wrap"
            >
                {feats.map((feat, index: number) => (
                    <div key={index} className="space-y-1">
                        <p className="text-4xl font-bold max-[629px]:text-2xl text-[#4770FF]">{feat.number}+</p>
                        <p className="text-gray-400 text-base max-[629px]:text-sm font-medium">{feat.what}</p>
                    </div>
                ))}
            </motion.div>

            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <TrophyIcon className="w-6 h-6 text-[#4770FF]" />
                    <h3 className="text-2xl font-bold text-white">Achievements</h3>
                </div>
                <div className="space-y-3">
                    {awards.map((award, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="w-full flex flex-col gap-3 bg-[#0E1018] p-4 rounded-lg border border-gray-900 hover:border-[#4770FF] transition-all group"
                        >
                            <div className="flex flex-wrap gap-3 justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <MedalIcon className="w-5 h-5 text-[#4770FF]" />
                                        <h4 className="font-bold text-lg text-white">{award.title}</h4>
                                    </div>
                                    
                                    
                                </div>
                                <Button
                                    asChild
                                    className={cn(
                                        "bg-black text-gray-400 hover:text-white hover:bg-[#4770FF] border border-gray-800 hover:border-[#4770FF] cursor-pointer text-sm"
                                    )}
                                >
                                    <a href={award.linkToSolution} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                        <span>View Project</span>
                                        <ArrowUpRightIcon className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-2">{award.description}</p>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="text-gray-500">{award.year}</span>
                                    <span className="text-[#4770FF] font-semibold">{award.position}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#4770FF]/10 to-transparent border-l-4 border-[#4770FF] p-4 rounded-r-lg">
                <p className="text-white font-semibold mb-2">💡 Engineering Philosophy</p>
                <p className="text-sm text-gray-400">
                    Every line of code should serve a purpose. I build with intention, focusing on scalability, maintainability, and real-world impact. 
                    Clean architecture isn't just a buzzword—it's how I deliver lasting value.
                </p>
            </div>
        </div>
    )
}

export default AboutComponent