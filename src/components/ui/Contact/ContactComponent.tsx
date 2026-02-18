import { cn } from "@/lib/utils"
import { Button } from "../button"
import { MailIcon, MessageCircleIcon, TwitterIcon, LinkedinIcon, GithubIcon, PlusIcon, MinusIcon } from "lucide-react"
import { useState } from "react"
import { motion } from "motion/react"

const ContactComponent = () => {
    const [openedIndex, setOpenedIndex] = useState<number | null>(null);

    const contactMethods = [
        {
            icon: MailIcon,
            label: "Email",
            value: "luqmanola60@gmail.com",
            href: "mailto:luqmanola60@gmail.com",
            color: "text-blue-400",
            description: "I respond within 24 hours"
        },
        {
            icon: MessageCircleIcon,
            label: "WhatsApp",
            value: "+234 916 759 6491",
            href: "https://wa.me/2349167596491",
            color: "text-green-400",
            description: "Let's chat directly"
        },
        {
            icon: TwitterIcon,
            label: "Twitter/X",
            value: "@codekagefx",
            href: "https://x.com/codekagefx",
            color: "text-sky-400",
            description: "DM me for quick questions"
        },
        {
            icon: LinkedinIcon,
            label: "LinkedIn",
            value: "CodeKage FX",
            href: "https://www.linkedin.com/in/codekage-fx-80243a23a/",
            color: "text-blue-500",
            description: "Let's connect professionally"
        },
        {
            icon: GithubIcon,
            label: "GitHub",
            value: "@CodeKageFX",
            href: "https://github.com/AbdulrahmanLuqman/",
            color: "text-gray-400",
            description: "Check out my code"
        }
    ];

    const FAQ = [
        {
            question: "What types of businesses do you work with",
            answer: "I specialize in working with early-stage startups and scaling businesses looking for robust, high-performance web solutions."
        },
        {
            question: "What is your typical project timeline",
            answer: "Most projects take between 2-6 weeks depending on the complexity and specific requirements of your business."
        },
        {
            question: "Do you offer post-launch support",
            answer: "Yes, I provide dedicated support and maintenance packages to ensure your platform scales seamlessly as your business grows."
        }
    ];

    return (
        <div className="w-2/3 h-[500px] max-[920px]:min-h-screen max-[920px]:w-full overflow-auto bg-black p-6 md:p-8 rounded-lg space-y-6">
            <div className="space-y-3">
                <h2 className="text-4xl font-semibold">Let's Work <span className="text-[#4770FF]">Together</span></h2>
                <p className="text-gray-400">
                    Ready to build something exceptional? Reach out through any of these channels and let's turn your ideas into reality.
                </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0E1018] p-3 md:p-5 rounded-lg border border-gray-900 hover:border-[#4770FF] transition-all group"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3 flex-1">
                                    <div className={cn("p-3 rounded-lg bg-black", method.color)}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{method.label}</p>
                                        <p className="text-white font-bold mt-1 break-all">{method.value}</p>
                                        <p className="text-xs text-gray-500 mt-1">{method.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <Button
                                    asChild
                                    className={cn("bg-[#4770FF] hover:bg-[#3d5fd9] text-white text-sm flex-1")}
                                >
                                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                                        Contact
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Response Time Notice */}
            <div className="bg-gradient-to-r from-[#4770FF]/10 to-transparent border-l-4 border-[#4770FF] p-4 rounded-r-lg">
                <p className="text-white font-semibold">⚡ Quick Response Guaranteed</p>
                <p className="text-sm text-gray-400 mt-1">
                    I typically respond to all inquiries within 24 hours. For urgent matters, WhatsApp is the fastest way to reach me.
                </p>
            </div>

            {/* FAQ Section */}
            <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">Common Questions</h3>
                {FAQ.map((f, index: number) => {
                    const isOpen = openedIndex === index;

                    return (
                        <div
                            key={index}
                            className={cn(
                                "bg-[#0E1018] p-4 rounded-lg transition-all duration-150",
                                isOpen && "bg-transparent border border-[#4770FF]"
                            )}
                        >
                            <div className="flex justify-between items-center">
                                <p className={cn("text-lg font-semibold", isOpen && "text-[#4770FF]")}>
                                    {f.question}?
                                </p>

                                <button
                                    className="bg-black p-2 rounded cursor-pointer hover:bg-[#1a1a1a] transition-colors"
                                    onClick={() => setOpenedIndex(isOpen ? null : index)}
                                >
                                    {isOpen ? (
                                        <MinusIcon className="w-5 h-5 text-[#4770FF]" />
                                    ) : (
                                        <PlusIcon className="w-5 h-5 text-[#4770FF]" />
                                    )}
                                </button>
                            </div>

                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-500",
                                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                                )}
                            >
                                <p className="text-sm text-gray-300">
                                    {f.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactComponent;