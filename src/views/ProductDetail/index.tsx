import styles from "./DetailProduct.module.scss";
import { typeProduct } from "@/types/product.type";

const DetailProduct = ({product} : {product: typeProduct}) => {
    return(
        <>
      <div className={styles.productDetail}>
        <h1 className={styles.productDetail__title}>Detail Product</h1>
        <div className={styles.productDetail__content}>
            <div key={product.id} className={styles.productDetail__content__item}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productDetail__content__item__image}
              ></img>
              <h1 className={styles.productDetail__content__item__name}>{product.name}</h1>
              <p className={styles.productDetail__content__item__category}>{product.category}</p>
              <p className={styles.productDetail__content__item__price}>{product.price && product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
            </div>
        </div>
      </div>
    </>
    )
}
export default DetailProduct