import React from 'react'
import { useState } from 'react';
import { Product } from './Product'
import { getProducts, getAllManufacturers } from './api';
import ProductComponent from './ProductCartComponent';

const ProductList: React.FC<{ avaiabilityFilter: boolean, manufacturerFilter: string[] }> = (props: { avaiabilityFilter: boolean, manufacturerFilter: string[] }) => {
    const [products, setProducts] = useState<Product[] | null>(null)
    const getProductsFromServer = () => {
        getProducts()
            .then(new_products => {
                setProducts(new_products.products);
            })

    };
    getProductsFromServer()
    return (
        <div>
            {products?.filter(p => (props.manufacturerFilter.includes(p.manufacturer)) && (Boolean(p.is_salable) === props.avaiabilityFilter || p.is_salable === 1)).map(p => <ProductComponent product={p}></ProductComponent>)}
        </div>
    )

};
export default ProductList;