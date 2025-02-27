"use client"

import { motion } from "framer-motion"
import { Brain, Globe, Users, BotIcon as Robot } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"
import myPicture from '@/public/images/profile.png';

export default function About() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      titleKey: "about.skills.ai",
      descriptionKey: "about.skills.ai.desc",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      titleKey: "about.skills.global",
      descriptionKey: "about.skills.global.desc",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      titleKey: "about.skills.leadership",
      descriptionKey: "about.skills.leadership.desc",
    },
    {
      icon: <Robot className="w-8 h-8 text-yellow-500" />,
      titleKey: "about.skills.robotics",
      descriptionKey: "about.skills.robotics.desc",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("about.title")}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("about.description")}</p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{t(skill.titleKey)}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t(skill.descriptionKey)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

