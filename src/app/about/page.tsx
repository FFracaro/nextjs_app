import styles from '@/app/about/page.module.css'
import Button from '@/components/button/button';
import Image from 'next/image';

export default function About() {
    return (
      <div>
        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/2598619/pexels-photo-2598619.jpeg" 
            fill={true} 
            alt=""
            className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>
              An Image of Something
            </h1>
            <h2 className={styles.imgDescription}>
              Some description of the image above
            </h2>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}>
              So Who Are You?
            </h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit massa in justo porta volutpat. Duis pretium cursus purus, eget porttitor tellus semper elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. In tincidunt sit amet lorem et venenatis. Fusce vitae consectetur nulla. Suspendisse porta scelerisque lorem ut rutrum. Integer dictum maximus hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus venenatis, velit non viverra gravida, purus magna consectetur lacus, sit amet blandit felis orci a ipsum. Sed vulputate arcu vitae ex pretium commodo. Aliquam vitae nulla et nisl finibus tempus et id velit. Donec vitae accumsan augue. Proin euismod erat neque. Suspendisse tincidunt ultricies justo, vitae molestie ipsum luctus ut. Aenean augue libero, auctor condimentum finibus id, ultricies blandit metus.
              <br />
              <br />
              Suspendisse feugiat pulvinar nisi et facilisis. Maecenas pharetra augue id volutpat vehicula. Donec quis vehicula magna. Donec vel gravida purus, ut fermentum est. Suspendisse nec porta mauris. Morbi maximus nisl massa, id egestas libero tincidunt nec. Morbi non nisi sed erat accumsan finibus et quis felis. In hac habitasse platea dictumst. Donec laoreet placerat nisi, sit amet consequat quam dapibus in. Phasellus nec felis lacus. Aenean lacinia lacus porta turpis blandit molestie. Vivamus placerat urna eget ex faucibus pellentesque. Vestibulum venenatis dui purus, sit amet pharetra libero volutpat volutpat. Nunc a tincidunt risus. Mauris eget erat mollis, egestas leo quis, facilisis enim. Curabitur tristique placerat felis eu feugiat.
              </p>
          </div>

          <div className={styles.item}>
            <h1 className={styles.title}>
              What do you want to do?
            </h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nisl, accumsan vitae turpis fermentum, aliquam efficitur elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris tristique laoreet lacus. Pellentesque posuere efficitur est. Nulla facilisi. Vivamus vitae neque at metus iaculis auctor. Nam diam mauris, sagittis condimentum nulla ac, condimentum volutpat nibh. In a sem quis arcu tempor rutrum sit amet ut ipsum. Aliquam et metus ut sem iaculis molestie at sed odio. Vivamus eleifend lorem eu metus imperdiet, vitae rhoncus massa consectetur. Morbi id risus ullamcorper, ornare libero vel, tincidunt nisl. Fusce ac maximus eros, a cursus nunc. Praesent eleifend arcu et lectus faucibus lobortis. Vivamus suscipit mauris eu vehicula ultrices.
              <br />
              <br /> - Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              <br /> - Aenean purus nisl, accumsan vitae turpis fermentum, aliquam efficitur elit
              <br />
              <br /> - Ligula mi semper leo, in pharetra dui justo id quam
            </p>
            <Button url="/contacts" text="Don't click here"/>
          </div>
        </div>
      </div>
    );
  }