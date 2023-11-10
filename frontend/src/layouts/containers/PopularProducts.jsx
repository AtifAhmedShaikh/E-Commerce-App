import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import  {fetchPopularProducts } from "../../services/products"
import ProductCard from "../../components/cards/ProductCard"
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/Loader";
const PopularProducts = () => {
    const navigate=useNavigate();
    const [popularProducts, setPopularProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetchPopularProducts();
            setPopularProducts(response.data);
            setLoading(false);
        })();
    }, []);
    return (
        <React.Fragment>
            <h4 className='text-center text-success mt-3'>Popular Products </h4>
            <div className='container-fluid justify-content-around d-flex flex-wrap py-3 px-2 gap-3'>
                {loading&&<Loader fontSize="16px" label="loading popular products..."/>}
                {
                    popularProducts.map(product => {
                        return <ProductCard key={product._id} {...product} />
                    })
                }
            </div>
            <div className='justify-content-around d-flex flex-wrap m-4'>
                <Button variant="primary" className='rounded-1 py-1 px-2 fs-6 mt-3 ms-5' size="lg" onClick={()=>navigate('/products')}>
                    See more Items
                </Button>
            </div>
        </React.Fragment>
    )
}

export default PopularProducts
