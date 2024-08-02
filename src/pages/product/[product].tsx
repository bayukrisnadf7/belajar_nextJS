import fetcher from '@/utils/swr/fetcher'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import DetailProduct from '@/views/ProductDetail'
const DetailProducts = () =>{
    const { query } = useRouter()
    const {data, error, isLoading} = useSWR(`/api/product/${query.product}`, fetcher)
    return(
        <div>
            <DetailProduct product={isLoading ? [] : data.data} />
        </div>
        
    )
}

export default DetailProducts