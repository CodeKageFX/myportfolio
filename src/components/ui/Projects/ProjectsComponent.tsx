import { Button } from "../button"
import { CodeIcon, RocketIcon, CheckCircle2Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion } from "motion/react"

const ProjectsComponent = () => {
    const [filterBy, setFilterBy] = useState("All")
    const [expandedProject, setExpandedProject] = useState<number | null>(null)
    
    const myProjects = [
        {
            image: "/assets/my-projects/anyday.png",
            name: "CelebrateAnyDay",
            description: "Create magical moments for any occasion",
            problem: "Planning celebrations requires coordination across multiple platforms, making it difficult to organize meaningful events",
            solution: "Built a unified SaaS platform that streamlines event planning with integrated tools for invitations, scheduling, and coordination",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
            results: "Delivering seamless celebration planning experience with real-time collaboration features",
            type: "SaaS",
            link: "https://celebrateanyday.vercel.app"
        },
        {
            image: "/assets/my-projects/openview.png",
            name: "OpenView",
            description: "Discover and explore open source projects",
            problem: "Developers struggle to find quality open-source projects to contribute to or learn from",
            solution: "Created a curated discovery platform that showcases trending and notable open-source projects with detailed insights",
            techStack: ["React", "TypeScript", "GitHub API", "Tailwind CSS"],
            results: "Helping developers discover meaningful open-source opportunities with smart filtering and recommendations",
            type: "SaaS",
            link: "https://open-views.vercel.app"
        },
        {
            image: "/assets/my-projects/ipAddress.png",
            name: "IP Address Tracker",
            description: "Track and visualize IP address locations",
            problem: "Network administrators need quick ways to geolocate and track IP addresses",
            solution: "Built an interactive IP tracking tool with map visualization and detailed location data",
            techStack: ["React", "TypeScript", "IP Geolocation API", "Leaflet.js"],
            results: "Instant IP geolocation with clean, interactive map interface",
            type: "Practice",
            link: "https://ip-address-tracker-seven-sigma.vercel.app"
        },
        {
            image: "/assets/my-projects/dokugen.png",
            name: "Dokugen",
            description: "Generate professional READMEs with AI",
            problem: "Currently, users have to manually select and copy the generated generator code, which is slightly inconvenient, especially for long outputs.",
            solution: "Added a copy-to-clipboard button near the generator code so users can quickly copy the content with one click.",
            techStack: ["Next", "TypeScript", "Tailwind CSS"],
            results: "Improved user experience by enabling one-click copying of code.",
            type: "OpenSource",
            link: "https://dokugen-readme.vercel.app"
        },
        {
            image: "/assets/my-projects/hue.png",
            name: "HueIsTheOne",
            description: "Color palette generator and explorer",
            problem: "Designers and developers need quick access to harmonious color palettes for their projects",
            solution: "Developed an interactive color palette tool with AI-powered suggestions and export functionality",
            techStack: ["React", "TypeScript", "Tailwind CSS", "Color APIs"],
            results: "Streamlined color selection workflow with intuitive interface and smart palette generation",
            type: "Practice",
            link: "https://hng-12-hue-is-the-one.vercel.app/"
        },
        {
            image: "/assets/my-projects/summerAi.png",
            name: "SummarEaseAI",
            description: "AI-powered summarization and translation",
            problem: "Reading long documents and translating content across languages is time-consuming",
            solution: "Built an AI-powered tool that instantly summarizes text and translates content with high accuracy",
            techStack: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
            results: "Reducing content processing time by 80% with intelligent summarization and translation",
            type: "Practice",
            link: "https://summar-ease-ai-2g4t.vercel.app/"
        },
        {
            image: "/assets/my-projects/noter.png",
            name: "Noter",
            description: "Modern note-taking application",
            problem: "Traditional note-taking apps lack the speed and simplicity developers need",
            solution: "Created a fast, markdown-based note-taking app with organization features and cloud sync",
            techStack: ["React", "TypeScript", "Firebase", "Markdown", "Tailwind CSS"],
            results: "Won Runner-Up at Bincom Hackathon 2025 - Clean architecture with blazing-fast performance",
            type: "Practice",
            link: "https://note-taking-orcin.vercel.app/dashboard"
        },
        {
            image: "/assets/my-projects/aiedit.png",
            name: "AiEdits",
            description: "AI-powered image editing tool",
            problem: "Professional image editing requires expensive software and steep learning curves",
            solution: "Developed an accessible AI-powered editing tool with intuitive controls for common editing tasks",
            techStack: ["React", "TypeScript", "AI/ML APIs", "Canvas API", "Tailwind CSS"],
            results: "Democratizing image editing with intelligent automation and user-friendly interface",
            type: "Practice",
            link: "https://banana-edit-eight.vercel.app"
        },
        {
            image: "/assets/my-projects/ticket.png",
            name: "Ticket Generator",
            description: "Generate professional event tickets",
            problem: "Event organizers need quick ways to create professional-looking tickets",
            solution: "Created a customizable ticket generator with templates and instant download functionality",
            techStack: ["React", "TypeScript", "HTML2Canvas", "Tailwind CSS"],
            results: "Simplified ticket creation process with professional templates and real-time preview",
            type: "Practice",
            link: "https://conference-ticket-generator-inky.vercel.app"
        }
        // NOTE: Add your OpenSource and Client projects here
        // Structure example:
        // {
        //     image: "/path/to/image.png",
        //     name: "Project Name",
        //     description: "Short description",
        //     problem: "What problem does this solve?",
        //     solution: "How did you solve it?",
        //     techStack: ["Tech1", "Tech2"],
        //     results: "What was the outcome/impact?",
        //     type: "OpenSource" or "Clients",
        //     link: "https://...",
        //     githubLink: "https://github.com/..." (optional)
        // }
    ]

    const filteredBy = filterBy === "All" ? myProjects : myProjects.filter((el) => el.type === filterBy)

    const filterButtons = ["All", "SaaS", "OpenSource", "Clients", "Practice"]

    return (
        <div className="w-2/3 h-[500px] max-[920px]:min-h-screen max-[920px]:w-full overflow-auto bg-black px-6 py-8 md:px-8 rounded-lg space-y-4">
            <div className="space-y-3">
                <h2 className="text-4xl max-[629px]:text-xl font-semibold">
                    Real-World Solutions & <span className="text-[#4770FF]">Proven Results</span>
                </h2>
                <p className="text-gray-400">
                    Production-ready applications solving real problems. Each project demonstrates clean architecture, scalable design, and business impact.
                </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
                {filterButtons.map((el) => (
                    <Button
                        key={el}
                        disabled={el === filterBy}
                        onClick={() => setFilterBy(el)}
                        className={cn(
                            "bg-[#202020bb] hover:bg-[#292929] text-white cursor-pointer text-sm",
                            filterBy === el && "bg-[#4770FF] hover:bg-[#476ffff1] text-white"
                        )}
                    >
                        {el}({el === "All" ? myProjects.length : myProjects.filter((p) => p.type === el).length})
                    </Button>
                ))}
            </div>
            
            <div className="space-y-5">
                {filteredBy.map((project, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-3 border border-gray-900 rounded-lg p-4 hover:border-[#4770FF] transition-colors bg-[#0a0a0a]"
                    >
                        <div className="bg-[#0E1018] rounded-lg overflow-hidden">
                            <img src={project.image} alt={project.name} className="rounded-lg w-full" />
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-wrap gap-2 justify-between items-start">
                                <div className="space-y-1 flex-1">
                                    <h4 className="md:text-xl text-lg font-bold text-white">{project.name}</h4>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                    <span className="inline-block bg-[#4770FF]/10 text-[#4770FF] px-2 py-1 rounded text-xs font-semibold">
                                        {project.type}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                    <Button
                                        asChild
                                        className={cn("hover:bg-[#4770FF] border border-[#4770FF] text-[#4770FF] hover:text-white bg-black text-sm")}
                                    >
                                        <a target="_blank" href={project.link} className="flex items-center gap-1" rel="noopener noreferrer">
                                            <RocketIcon className="w-4 h-4" />
                                            <span>Live Demo</span>
                                        </a>
                                    </Button>
                                </div>

                            {/* Expandable Details */}
                            <div className="space-y-3">
                                <button
                                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                                    className="text-sm text-[#4770FF] hover:underline font-medium"
                                >
                                    {expandedProject === index ? "Hide Details" : "View Details →"}
                                </button>

                                {expandedProject === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-3 pt-3 border-t border-gray-800"
                                    >
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <CodeIcon className="w-4 h-4 mt-1 text-[#4770FF] flex-shrink-0" />
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider">{ project.type === "OpenSource" ? "Issue" : "Problem" }</p>
                                                    <p className="text-sm text-gray-400">{project.problem}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <RocketIcon className="w-4 h-4 mt-1 text-[#4770FF] flex-shrink-0" />
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Solution</p>
                                                    <p className="text-sm text-gray-400">{project.solution}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2Icon className="w-4 h-4 mt-1 text-[#4770FF] flex-shrink-0" />
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Results</p>
                                                    <p className="text-sm text-gray-400">{project.results}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Tech Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="bg-[#0E1018] border border-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsComponent