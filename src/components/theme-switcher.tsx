"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { flushSync } from "react-dom"
import { SunIcon, MoonIcon } from "lucide-react"

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-16 h-8" />

  const isDark = theme === "dark"

  function toggleTheme() {
    const next = isDark ? "light" : "dark"
    if (!document.startViewTransition) {
      setTheme(next)
      return
    }
    document.startViewTransition(() => flushSync(() => setTheme(next)))
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
    >
      <SunIcon
        className={`w-4 h-4 transition-opacity ${isDark ? "opacity-40" : "opacity-100"}`}
      />
      <MoonIcon
        className={`w-4 h-4 transition-opacity ${isDark ? "opacity-100" : "opacity-40"}`}
      />
    </button>
  )
}

export { ThemeSwitcher }
