"use client"

import { GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/context"

export default function Education() {
  const { t } = useLanguage()

  const education = [
    {
      degree: t("education.degree"),
      institution: t("education.institution"),
      period: t("education.period"),
      details: [t("education.details.1"), t("education.details.2"), t("education.details.3")],
      achievements: [
        t("education.awards.1"),
        t("education.awards.2"),
        t("education.awards.3"),
        t("education.awards.4"),
      ],
      exchanges: [t("education.exchange.1"), t("education.exchange.2")],
    },
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title={t("education.title")} />
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>

                <div className="space-y-4">
                  {edu.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300">
                      {detail}
                    </p>
                  ))}

                  <div>
                    <h4 className="text-lg font-medium mb-2 dark:text-gray-200">{t("education.awards")}</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2 dark:text-gray-200">{t("education.exchange")}</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.exchanges.map((exchange, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300">
                          {exchange}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

