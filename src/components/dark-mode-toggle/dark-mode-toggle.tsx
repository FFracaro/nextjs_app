'use client'
import styles from "@/components/dark-mode-toggle/dark-mode-toggle.module.css"
import { ThemeContext } from "@/context/theme-context";
import { useContext } from "react";


export default function DarkModeToggle() {
    const { mode, toggle } = useContext(ThemeContext)

    return (
        <div className={styles.darkModeContainer} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div 
                className={styles.ball} 
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    );
  }