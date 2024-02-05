import Image from "next/image";
import styles from "@/app/page.module.css"
import heroImg from "./../../public/hero.png"

export default function Home() {
  return (
    <div>
      <Image src={heroImg} alt="" priority className={styles.img}/>
      <Image src="https://images.pexels.com/photos/19137460/pexels-photo-19137460/free-photo-of-praia-diamante-bali.jpeg" width="300" height="200" alt=""/>
    </div>
  );
}
