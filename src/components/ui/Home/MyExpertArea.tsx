import { motion } from "motion/react"

const MyExpertArea = () => {
    
    const skills = [
        {
            image: "/assets/react.png",
            name: "React",
            years: "3+"
        },
        {
            image: "/assets/next.png",
            name: "Next.js",
            years: "2+"
        },
        {
            image: "/assets/tailwind.png",
            name: "Tailwind",
            years: "3+"
        },
        {
            image: "/assets/figma.png",
            name: "Figma",
            years: "2+"
        },
        {
            image: "/assets/supabase.png",
            name: "Supabase",
            years: "1+"
        },
        {
            image: "/assets/typescript.png", // Replace with TypeScript icon if available
            name: "TypeScript",
            years: "2+"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 260, damping: 20 }
        }
    }

  return (
    <div className="w-full bg-black h-full rounded-lg overflow-hidden py-2 border border-transparent hover:border-gray-800 transition-colors flex flex-col">
        <h3 className="bg-black p-4 text-lg font-semibold border-b border-gray-900">Core Technologies</h3>
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-3 p-4 flex-grow"
        >
        {
            skills.map((skill, index:number) => (
                <div key={index} className="flex flex-col items-center w-full gap-2">
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -5, backgroundColor: "#1e212b" }}
                        className="bg-[#0E1018] rounded-xl w-full flex justify-center py-4 border border-gray-900 transition-colors relative group"
                    >
                        <img src={skill.image} alt={skill.name} className="w-8 h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"/>
                        <span className="absolute top-1 right-1 bg-[#4770FF] text-white text-[8px] px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                            {skill.years}
                        </span>
                    </motion.div>
                    
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter text-center">{skill.name}</p>
                </div>
            ))
        }
        </motion.div>
        <div className="px-4 pb-4 pt-2 border-t border-gray-900">
            <p className="text-[11px] font-semibold text-gray-400 text-center">
                Building production applications with modern tools and proven architectures
            </p>
        </div>
    </div>
  )
}

export default MyExpertArea