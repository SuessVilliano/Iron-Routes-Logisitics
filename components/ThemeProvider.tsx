'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'dark' | 'light'
interface ThemeCtx { theme: Theme; toggleTheme: () => void }
const ThemeContext = createContext<ThemeCtx>({ theme: 'dark', toggleTheme: () => {} })

export function useTheme() { return useContext(ThemeContext) }

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('irl_theme') as Theme | null
    const t = saved ?? 'dark'
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('irl_theme', next)
      document.documentElement.setAttribute('data-theme', next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
