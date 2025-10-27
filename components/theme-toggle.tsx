import { Moon, Sun, Coffee } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('cafe')
    } else {
      setTheme('light')
    }
  }

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="h-[1.2rem] w-[1.2rem]" />
    if (theme === 'dark') return <Moon className="h-[1.2rem] w-[1.2rem]" />
    return <Coffee className="h-[1.2rem] w-[1.2rem]" />
  }

  const getThemeLabel = () => {
    if (theme === 'light') return 'Hell'
    if (theme === 'dark') return 'Dunkel'
    return 'Café'
  }

  if (!mounted) {
    return (
      <Button 
        variant="outline" 
        size="icon" 
        className="transition-all duration-200 hover:scale-110 border-2 border-[#FFD700] bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 hover:bg-slate-800 text-[#FFD700] hover:text-[#FFA500]"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Theme umschalten</span>
      </Button>
    )
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="transition-all duration-200 hover:scale-110 border-2 border-[#FFD700] bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 hover:bg-slate-800 text-[#FFD700] hover:text-[#FFA500]"
      title={`Aktuell: ${getThemeLabel()}`}
    >
      {getThemeIcon()}
      <span className="sr-only">Theme umschalten - {getThemeLabel()}</span>
    </Button>
  )
}