"use client"

import Image from "next/image"
import { Linkedin, Mail, ArrowDown, Phone, FileText, Users, Globe, GraduationCap, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/context"

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

const highlights = [
  {
    icon: <GraduationCap className="w-8 h-8 text-yellow-500" />,
    titleKey: "hero.dual",
    descriptionKey: "hero.dual.desc",
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    titleKey: "hero.research",
    descriptionKey: "hero.research.desc",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    titleKey: "hero.leadership",
    descriptionKey: "hero.leadership.desc",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    titleKey: "hero.global",
    descriptionKey: "hero.global.desc",
  },
]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
    >
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between min-h-screen">
        <div className="pt-20">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {t("hero.title")}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                {t("hero.role")}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0">
                {t("hero.description")}
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                <a
                  href="https://www.linkedin.com/in/ka-chun-leung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:wesleyleungkachun@gmail.com"
                  className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
              <motion.button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.cta")}
                <ArrowDown className="w-4 h-4" />
              </motion.button>
            </motion.div>

              <motion.div
                  className="lg:w-1/2"
                  initial={{opacity: 0, scale: 0.9}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.6, delay: 0.2}}
              >
                  <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                      {/* Gradient Background Layers */}
                      <div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl transform rotate-6 opacity-50"></div>
                      <div
                          className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl transform -rotate-6 opacity-50"></div>

                      {/* Image Container */}
                      <div
                          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                              src="/images/profile.png"
                              alt="Wesley Leung"
                              fill  // Automatically fills the parent div
                              className="object-cover"
                              priority
                          />
                      </div>
                  </div>
              </motion.div>
          </div>

            {/* Me at a Glance Section */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
            >
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
                    {t("hero.glance")}
                </h3>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  <div className="flex items-center mb-2">
                    {highlight.icon}
                    <h4 className="text-lg font-semibold ml-3 text-gray-800 dark:text-gray-200">
                      {t(highlight.titleKey)}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t(highlight.descriptionKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Prompt */}
        <motion.div
          className="flex flex-col items-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-2 text-sm font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
             {/*Scroll to explore*/}
              {t("hero.scroll")}
          </motion.p>
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <ChevronDown className="w-6 h-6 -mt-3 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

