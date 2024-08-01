import { typeProduct } from "@/types/product.type";
import styles from "./Product.module.scss";


const ProductView = ({ products }: { products: typeProduct[] }) => {
    console.log(products)
  return (
    <>
      <div className={styles.product}>
        <h1 className={styles.product__title}>Product Page</h1>
        <div className={styles.product__content}>
          {products.map((product: typeProduct) => (
            <div key={product.id} className={styles.product__content__item}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.product__content__item__image}
              ></img>
              <h1 className={styles.product__content__item__name}>{product.name}</h1>
              <p className={styles.product__content__item__category}>{product.category}</p>
              <p className={styles.product__content__item__price}>{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductView;
