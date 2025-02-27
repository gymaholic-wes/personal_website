"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/i18n/context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="mr-2">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <span className={language === "en" ? "font-bold" : ""}>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh-Hant")}>
          <span className={language === "zh-Hant" ? "font-bold" : ""}>繁體中文</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh-Hans")}>
          <span className={language === "zh-Hans" ? "font-bold" : ""}>简体中文</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

