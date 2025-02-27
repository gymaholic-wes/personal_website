"use client"

import { motion } from "framer-motion"
import { FileText, Users, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { useLanguage } from "@/lib/i18n/context"

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.underwater.title"),
      category: t("projects.underwater.category"),
      period: t("projects.underwater.period"),
      description: [t("projects.underwater.desc.1"), t("projects.underwater.desc.2"), t("projects.underwater.desc.3")],
      link: "https://arxiv.org/abs/2410.02345",
    },
    {
      title: t("projects.rov.title"),
      role: t("projects.rov.role"),
      period: t("projects.rov.period"),
      description: [t("projects.rov.desc.1"), t("projects.rov.desc.2"), t("projects.rov.desc.3")],
      link: "https://seng.hkust.edu.hk/news/20230505/hkust-robotics-team-named-champion-hong-kong-regional-contest-mate-international-rov-competition-11-years",
    },
    {
      title: t("projects.gdsc.title"),
      role: t("projects.gdsc.role"),
      period: t("projects.gdsc.period"),
      description: [t("projects.gdsc.desc.1"), t("projects.gdsc.desc.2"), t("projects.gdsc.desc.3")],
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title={t("projects.title")} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <LinkIcon className="h-5 w-5" />
                    </Button>
                  </a>
                )}
              </div>
              {project.role && (
                <p className="text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {project.role}
                </p>
              )}
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                {project.period}
              </p>
              <ul className="space-y-2">
                {project.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

