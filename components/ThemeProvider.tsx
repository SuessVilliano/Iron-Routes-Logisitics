'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'dark' | 'light'
interface ThemeCtx { theme: Theme; toggleTheme: () => void }
const ThemeContext = createContext<ThemeCtx>({ theme: 'dark', toggleTheme: () => {} })

export function useTheme() { return useContext(ThemeContext) }

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('irl_theme') as Theme | null
    const t = saved ?? 'dark'
    setTheme(t)
    applyTheme(t)
  }, [])

  const applyTheme = (t: Theme) => {
    const root = document.documentElement
    if (t === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('irl_theme', next)
      applyTheme(next)
      return next
    })
  }

  // Prevent flash by not rendering until mounted
  if (!mounted) return <>{children}</>

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
