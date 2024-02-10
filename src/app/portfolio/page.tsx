import styles from "@/app/portfolio/page.module.css"
import Link from "next/link";

export default function Portfolio() {
    return (
      <div className={styles.portfolioContainer}>
        <h1 className={styles.subTitle}>aaaaaa</h1>
        <div className={styles.items}>
          <Link href="/portfolio/illustrations" className={styles.item}>
            <span className={styles.title}>I'm here</span>
          </Link>
          <Link href="/portfolio/websites" className={styles.item}>
            <span className={styles.title}>I'm here</span>
          </Link>
          <Link href="/portfolio/applications" className={styles.item}>
            <span className={styles.title}>I'm here</span>
          </Link>
        </div>
      </div>
    );
  }