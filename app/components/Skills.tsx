"use client"

import { motion } from "framer-motion"
import { Code, Globe, Brain, BotIcon as Robot, Code2, Users } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { useLanguage } from "@/lib/i18n/context"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

export default function Skills() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: Code,
      titleKey: "skills.programming.title",
      techKey: "skills.programming.tech",
      descriptionKey: "skills.programming.desc",
      color: "text-blue-500",
    },
    {
      icon: Brain,
      titleKey: "skills.ai.title",
      techKey: "skills.ai.tech",
      descriptionKey: "skills.ai.desc",
      color: "text-purple-500",
    },
    {
      icon: Robot,
      titleKey: "skills.robotics.title",
      techKey: "skills.robotics.tech",
      descriptionKey: "skills.robotics.desc",
      color: "text-green-500",
    },
    {
      icon: Code2,
      titleKey: "skills.web.title",
      techKey: "skills.web.tech",
      descriptionKey: "skills.web.desc",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      titleKey: "skills.leadership.title",
      techKey: "skills.leadership.tech",
      descriptionKey: "skills.leadership.desc",
      color: "text-red-500",
    },
    {
      icon: Globe,
      titleKey: "skills.global.title",
      techKey: "skills.global.tech",
      descriptionKey: "skills.global.desc",
      color: "text-indigo-500",
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title={t("skills.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {t(skill.titleKey)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t(skill.techKey)}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{t(skill.descriptionKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

