import React, { useEffect } from 'react'
import { useState } from 'react';
import { Product } from '../Product'
import { getProducts } from '../api';
import ProductComponent from './ProductCartComponent';

const ProductListComponent: React.FC<{ avaiabilityFilter: boolean, manufacturerFilter: string[] }> = (props: { avaiabilityFilter: boolean, manufacturerFilter: string[] }) => {
    const [products, setProducts] = useState<Product[] | null>(null)
    const getProductsFromServer = () => {
        getProducts()
            .then(new_products => {
                setProducts(new_products.products);
            })

    };
    useEffect(() => {
        getProductsFromServer()
    }, []);


    return (
        <div >
            {products?.filter(p => (props.manufacturerFilter.includes(p.manufacturer)) && (Boolean(p.stock) === props.avaiabilityFilter || p.stock > 0) && p.is_salable === 1).map(p => <ProductComponent product={p}></ProductComponent>)}
        </div >
    )

};
export default ProductListComponent;