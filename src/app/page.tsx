import Image from "next/image";
import styles from "@/app/page.module.css"
import heroImg from './../../public/hero.png'
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Hello, this is something, because why not?
        </h1>
        <p className={styles.description}>
          Here we can see and do something, because why not?
        </p>
        <Button url="/portfolio" text="Look around"/>
      </div>
      <div className={styles.item}>
        <Image src={heroImg} alt="" priority className={styles.image}/>
      </div>
    </div>
  );
}
