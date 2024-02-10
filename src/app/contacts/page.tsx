import styles from "@/app/contacts/page.module.css"
import Button from "@/components/button/button";
import Image from "next/image";

export default function Contacts() {
    return (
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>What are you doing?</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image 
              src="/contact.png"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
          <form className={styles.form} action="">
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="text" placeholder="Email" className={styles.input} />
            <textarea className={styles.textArea} placeholder="Message" cols={30} rows={10}></textarea>
            <Button url="#" text="Send" />
          </form>
        </div>
      </div>
    );
  }
