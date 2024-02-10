import styles from '@/app/blog/page.module.css'
import Image from 'next/image';
import Link from 'next/link'

export default function Blog() {
    return (
      <div className={styles.blogContainer}>
        <Link href="/blog/testId" className={styles.link}>
          <div className={styles.imageContainer}>
            <Image 
              className={styles.image}
              src="https://images.pexels.com/photos/12842333/pexels-photo-12842333.jpeg" 
              alt="" 
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.itemTitle}>asdasdasdas</h1>
            <p className={styles.itemDescription}>sdsdfdsfsdfsd sdfsdfsdf sdfsdfsdfsd sdfdsfsdf dsfsdfsdfsdfsd dsfsdfsdf</p>
          </div>
        </Link>

        <Link href="/blog/testId" className={styles.link}>
          <div className={styles.imageContainer}>
            <Image 
              className={styles.image}
              src="https://images.pexels.com/photos/12842333/pexels-photo-12842333.jpeg" 
              alt="" 
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.itemTitle}>asdasdasdas</h1>
            <p className={styles.itemDescription}>sdsdfdsfsdfsd sdfsdfsdf sdfsdfsdfsd sdfdsfsdf dsfsdfsdfsdfsd dsfsdfsdf</p>
          </div>
        </Link>

        <Link href="/blog/testId" className={styles.link}>
          <div className={styles.imageContainer}>
            <Image 
              className={styles.image}
              src="https://images.pexels.com/photos/12842333/pexels-photo-12842333.jpeg" 
              alt="" 
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.itemTitle}>asdasdasdas</h1>
            <p className={styles.itemDescription}>sdsdfdsfsdfsd sdfsdfsdf sdfsdfsdfsd sdfdsfsdf dsfsdfsdfsdfsd dsfsdfsdf</p>
          </div>
        </Link>
      </div>
    );
  }