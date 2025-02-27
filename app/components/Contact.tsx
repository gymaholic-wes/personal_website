"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("contact.title")}
        </motion.h2>
        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">{t("contact.info")}</h3>
              <div className="space-y-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-6 h-6 mr-3 text-blue-600" />
                  {t("contact.email")}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                  {t("contact.location")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/*<div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">*/}
      {/*  <Image src="placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />*/}
      {/*</div>*/}
    </section>
  )
}

