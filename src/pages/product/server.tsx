import { typeProduct } from "@/types/product.type"
import ProductView from "@/views/Product/Main"

const ProductPage  = (props: {products: typeProduct[]}) => {
    const {products} = props
    return (
        <ProductView products={products} />
    )
}

export default ProductPage

export async function getServerSideProps(){
    // fetch data
    const res = await fetch('http://localhost:3000/api/product')
    const respone = await res.json()
    console.log(respone)
    return {
        props : {
            products : respone.data
        }
    }
    
}