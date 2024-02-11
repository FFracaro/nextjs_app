"use client"

import styles from "@/components/navbar/navbar.module.css"
import { LinksType } from "@/types/links";
import Link from "next/link";
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";

const links: LinksType[] = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contacts",
        url: "/contacts"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    }
]

export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <Link href="/" className={styles.logo}>Hellow</Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                <button className={styles.logoutButton}
                  onClick={() => {
                    console.log("Logged out")
                }}>Logout</button>
            </div>
        </div>
    );
  }