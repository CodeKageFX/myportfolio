import { motion } from "motion/react"
import { Laptop } from "lucide-react"

const Story = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-gradient-to-br from-[#0a0a0a] to-black rounded-lg px-6 py-8 border border-gray-900 hover:border-[#4770FF]/30 transition-colors lg:col-span-2 md:col-span-1"
        >
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3">
                    <div className="bg-[#4770FF]/10 p-3 rounded-lg">
                        <Laptop className="w-6 h-6 text-[#4770FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">The Journey</h3>
                </div>

                {/* Story Content */}
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                        I'm CodeKage, a <span className="text-white font-semibold">self-taught developer</span> and <span className="text-white font-semibold">university student</span> passionate about building production-ready applications and constantly improving my engineering depth.
                    </p>
                    
                    <p>
                        <span className="text-white font-semibold">By day, I'm a student.</span> By night, I transform into a <span className="text-white font-semibold">visionary creator</span>, diving deep into code, mastering new technologies, and building applications that solve real problems. My self-taught journey has taught me <span className="text-white font-semibold">discipline, persistence, and the power of continuous learning</span>.
                    </p>

                    <p>
                        Today, I build with <span className="text-[#4770FF] font-semibold">React, Next.js, and TypeScript</span>, focusing on clean architecture, performance optimization, and user experience. Every project is an opportunity to deliver real business value while pushing my technical capabilities further.
                    </p>

                    {/* Pull Quote */}
                    <div className="border-l-4 border-[#4770FF] pl-6 py-4 bg-[#4770FF]/5 rounded-r-lg my-6">
                        <p className="text-white font-medium italic md:text-lg">
                            "Being self-taught means every line of code represents hours of learning, debugging, and growth. I care deeply about clean architecture, performance, and creating applications that actually solve problems."
                        </p>
                    </div>

                    <p className="text-gray-400">
                        Whether it's scaling startups, building SaaS products, or contributing to open source, I'm driven by the opportunity to create meaningful impact through code.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Story
