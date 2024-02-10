import styles from '@/app/portfolio/[category]/page.module.css'
import Button from '@/components/button/button';
import Image from 'next/image';

export default function Category({params}) {
  console.log(params)
    return (
      <div className={styles.categoryContainer}>
        <h1 className={styles.subtitle}>
          {params.category}
        </h1>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.itemTitle}>asdasdasdas</h1>
            <p className={styles.itemDescription}>sdsdfdsfsdfsd sdfsdfsdf sdfsdfsdfsd sdfdsfsdf dsfsdfsdfsdfsd dsfsdfsdf</p>
            <Button text="See more" url="#" />
          </div>
          <div className={styles.imageContainer}>
            <Image 
              className={styles.image}
              src="https://images.pexels.com/photos/12842333/pexels-photo-12842333.jpeg" 
              alt="" 
              fill={true} 
            />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.itemTitle}>asdasdasdas</h1>
            <p className={styles.itemDescription}>sdsdfdsfsdfsd sdfsdfsdf sdfsdfsdfsd sdfdsfsdf dsfsdfsdfsdfsd dsfsdfsdf</p>
            <Button text="See more" url="#" />
          </div>
          <div className={styles.imageContainer}>
            <Image 
              className={styles.image}
              src="https://images.pexels.com/photos/12842333/pexels-photo-12842333.jpeg" 
              alt="" 
              fill={true} 
            />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.itemTitle}>asdasdasdas</h1>
            <p className={styles.itemDescription}>sdsdfdsfsdfsd sdfsdfsdf sdfsdfsdfsd sdfdsfsdf dsfsdfsdfsdfsd dsfsdfsdf</p>
            <Button text="See more" url="#" />
          </div>
          <div className={styles.imageContainer}>
            <Image 
              className={styles.image}
              src="https://images.pexels.com/photos/12842333/pexels-photo-12842333.jpeg" 
              alt="" 
              fill={true} 
            />
          </div>
        </div>
      </div>
    );
  }