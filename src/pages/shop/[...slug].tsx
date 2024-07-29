import { useRouter } from "next/router";
const ShopPage = () => {
    const { query } = useRouter();
    console.log(query)
  return (
    <div>
      <h1>Shop Page</h1>
      {/* <p>Shop : {`${query.slug[0] + "-" + query.slug[1]}`}</p> */}
    </div>
  );
};
export default ShopPage;
