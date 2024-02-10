import styles from "@/app/blog/[date]/page.module.css"
import Image from "next/image";

export default function BlogPost() {
    return (
      <div className={styles.blopPostContainer}>
        <div className={styles.topContainer}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              asdasda asdasdasd asdasdasd asdasdasdasdasd asdasdasdasdas
            </h1>
            <p className={styles.description}>
              asdasdasd asdasdasd asdasdasda asdasdasd adasdasda asdasdasd adasdas asdasdasdasdasd
              adasdasdas asdasdasd adasdasd adasdasda adasdasd asdasdasdas 
              adasdasd asdadadadadasdasdasd asdas asdadasdasdasd asdas asdasdasda
            </p>
            <div className={styles.author}>
              <Image 
                src="https://images.pexels.com/photos/6381064/pexels-photo-6381064.jpeg"
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>John Doe</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/19652315/pexels-photo-19652315/free-photo-of-mao-casa-lar-motivacao.jpeg"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu accumsan velit. Sed a ipsum et ante maximus convallis facilisis sit amet dui. Nullam tincidunt magna eget sem viverra volutpat. Pellentesque a semper risus. Vivamus in metus aliquam, condimentum magna ut, consectetur erat. Curabitur sed leo nec massa tincidunt fringilla. Nullam a molestie turpis.
          <br />
          <br />
          Mauris eu nunc non erat porttitor ornare. Aenean sollicitudin, nibh in ultrices sagittis, augue lectus vestibulum nibh, vitae fringilla diam orci hendrerit augue. Maecenas massa metus, hendrerit et ultricies non, tempor eu lectus. Duis sit amet ipsum viverra tellus varius sagittis non non lacus. Suspendisse quis ex efficitur tortor eleifend varius et nec dolor. Nullam eget bibendum lorem. Suspendisse aliquet turpis at felis accumsan pharetra. Mauris commodo eros at ante varius, tristique dapibus lacus eleifend. Phasellus posuere, turpis quis sollicitudin imperdiet, purus dolor tempus lectus, sit amet pharetra elit metus eu enim. Nulla non metus vitae elit tempus euismod vitae iaculis quam. Mauris vitae dolor ornare, sagittis nibh sit amet, rhoncus quam. Sed at justo id mauris molestie eleifend at in purus.
          <br />
          <br />
          Phasellus rutrum iaculis enim nec rutrum. Mauris sit amet ante et enim fringilla faucibus eu efficitur diam. Fusce in neque rutrum, luctus massa in, egestas enim. Nullam fermentum vehicula massa quis feugiat. Sed commodo, nunc a auctor venenatis, ligula arcu dapibus tortor, at ullamcorper risus purus non neque. Etiam quis sagittis nisi. Sed quis pellentesque dui. Morbi eleifend feugiat est id vulputate. Pellentesque massa risus, posuere non tempus nec, condimentum eget lectus. Ut metus mi, molestie vitae dictum sodales, consequat sed ante. Maecenas a tortor nisl. Sed sollicitudin quis urna ut consectetur. Nunc in urna et metus efficitur viverra sit amet tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, dui nec malesuada scelerisque, ligula nibh porttitor quam, in lobortis augue enim vestibulum nunc. Mauris egestas massa arcu, non luctus tortor mollis nec.
          </p>
        </div>
      </div>
    );
  }
