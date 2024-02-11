"use client"

import { createContext, useState } from "react"

type DarkMode = {
    mode: string
    toggle?: () => void
}

export const ThemeContext = createContext<DarkMode>({ mode: "dark" })

export default function ThemeProvider ({ children }) {
    const [mode, setMode] = useState("dark")

    const toggle = () => { setMode((prev) => (prev === "dark" ? "light" : "dark")) }

    return (<ThemeContext.Provider value={{ mode, toggle }}>
                <div className={`theme ${mode}`}>{children}</div>
            </ThemeContext.Provider>)
}
