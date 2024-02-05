"use client"

import styles from "@/components/footer/footer.module.css"
import Image from "next/image";

export default function Footer() {
    return (
      <div className={styles.footerContainer}>
        <div>Aloha Ahore. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" width={20} height={20} className={styles.icon} alt="Frank Dev Facebook Account"/>
          <Image src="/2.png" width={20} height={20} className={styles.icon} alt="Frank Dev"/>
          <Image src="/3.png" width={20} height={20} className={styles.icon} alt="Frank Dev"/>
          <Image src="/4.png" width={20} height={20} className={styles.icon} alt="Frank Dev"/>
        </div>
      </div>
    );
  }