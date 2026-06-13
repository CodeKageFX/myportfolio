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
            image: "/assets/typescript.png",
            name: "TypeScript",
            years: "2+"
        },
        {
            name: "Node.js",
            svg: (
                <svg viewBox="0 0 256 284" className="w-8 h-8" fill="#339933" xmlns="http://www.w3.org/2000/svg">
                    <path d="M127.7 0L24.3 59.7v119.5L127.7 239l103.4-59.7V59.7L127.7 0zm68 152.5c-4.2 7.2-10.6 13.1-18.5 16.7-7.8 3.6-16.8 5.4-26 5.4-14 0-26.1-4.2-34.9-12-8.8-7.9-13.3-19.6-13.3-34.1 0-14.5 4.5-26.3 13.3-34.1 8.8-7.9 20.9-12 34.9-12 9.8 0 18.3 1.8 25 5.1 6.7 3.3 12.5 8.7 16.8 15.6l-19.1 11c-6.6-10.1-14.1-14.6-22.7-14.6-7.6 0-13.6 2.7-18 8.1-4.4 5.4-6.6 12.8-6.6 21.6s2.2 16.2 6.6 21.6c4.4 5.4 10.4 8.1 18 8.1 8.6 0 16.1-4.5 22.7-14.6l19.1 11zm-27.1-51.9c1.7 1.7 2.6 4 2.6 6.6 0 2.6-.9 4.9-2.6 6.6-1.7 1.7-4 2.6-6.6 2.6s-4.9-.9-6.6-2.6c-1.7-1.7-2.6-4-2.6-6.6 0-2.6.9-4.9 2.6-6.6 1.7-1.7 4-2.6 6.6-2.6s4.9.9 6.6 2.6z" />
                </svg>
            ),
            years: "2+"
        },
        {
            name: "Express",
            svg: (
                <svg viewBox="0 0 256 128" className="w-8 h-8" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                    <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="96" fontWeight="bold" fontFamily="system-ui, sans-serif">ex</text>
                </svg>
            ),
            years: "2+"
        },
        {
            name: "PostgreSQL",
            svg: (
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 3.8 2 6v12c0 2.2 4.48 4 10 4s10-1.8 10-4V6c0-2.2-4.48-4-10-4zm0 2c4.82 0 8 1.45 8 2s-3.18 2-8 2-8-1.45-8-2 3.18-2 8-2zm8 4.62c-.93.57-2.63 1.05-4.85 1.27C14.33 10 13.2 10 12 10s-2.33 0-3.15-.11c-2.22-.22-3.92-.7-4.85-1.27V6.8c1 .7 3.32 1.2 6 1.2s5-.5 6-1.2v1.82zm0 6c-.93.57-2.63 1.05-4.85 1.27C14.33 16 13.2 16 12 16s-2.33 0-3.15-.11c-2.22-.22-3.92-.7-4.85-1.27v-1.82c1 .7 3.32 1.2 6 1.2s5-.5 6-1.2v1.82z" fill="#336791"/>
                </svg>
            ),
            years: "1+"
        },
        {
            name: "Drizzle ORM",
            svg: (
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" fill="#C5F82A"/>
                    <path d="M9 13l-1 2h2l-1-2zm4 2l-1 2h2l-1-2zm3-3l-1 2h2l-1-2z" fill="#C5F82A"/>
                </svg>
            ),
            years: "1+"
        },
        {
            name: "Prisma",
            svg: (
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 20h20L12 2zm0 4l6.5 11.5H5.5L12 6z" fill="#0C344B"/>
                    <path d="M12 6l6.5 11.5H5.5L12 6z" fill="#16A394"/>
                    <path d="M12 6v11.5l6.5-11.5L12 6z" fill="#0F8377"/>
                </svg>
            ),
            years: "2+"
        },
        {
            image: "/assets/supabase.png",
            name: "Supabase",
            years: "1+"
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
            image: "/assets/github.png",
            name: "GitHub",
            years: "3+"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
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
                        className="bg-[#0E1018] rounded-xl w-full flex justify-center items-center h-16 py-4 border border-gray-900 transition-colors relative group"
                    >
                        {skill.svg ? (
                            <div className="w-8 h-8 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
                                {skill.svg}
                            </div>
                        ) : (
                            <img src={skill.image} alt={skill.name} className="w-8 h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"/>
                        )}
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