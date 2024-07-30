import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type typeProduct = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProduct] =  useState<typeProduct[]>([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.data);
        // console.log(data);
      });
  }, []);
  return (
    <>
      <div>Product Page</div>
      {products.map((product: typeProduct) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.qty}</p>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
