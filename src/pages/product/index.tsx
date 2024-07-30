import ProductView from "@/views/Product/Main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProduct] =  useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  const {data, error, isLoading} = useSWR('/api/product', fetcher)
//   useEffect(() => {
//     fetch("/api/product")
//       .then((res) => res.json())
//       .then((res) => {
//         setProduct(res.data);
//         // console.log(data);
//       });
//   }, []);
  return (
    <>
    <ProductView products={isLoading ? [] : data.data} />
    </>
  );
};

export default ProductPage;
