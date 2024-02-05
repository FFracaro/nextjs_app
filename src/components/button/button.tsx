import styles from "@/components/button/button.module.css"
import Link from "next/link";

export default function Button({ text, url }) {
    return (
        <Link href={url}>
            <button className={styles.buttonContainer}>
                {text}
            </button>
        </Link>
    );
  }