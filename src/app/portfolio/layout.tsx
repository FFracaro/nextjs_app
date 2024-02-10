import styles from "@/app/portfolio/page.module.css"

export default function Layout({children}) {
    return (
      <div>
        <h1 className={styles.mainTitle}>Main title</h1>
        {children}
      </div>
    );
  }