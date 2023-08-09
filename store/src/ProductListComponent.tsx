import React from 'react'
import { useState } from 'react';
import { Product } from './Product'
import { getProducts } from './api';
import ProductComponent from './ProductCartComponent';
const emptyProduct = (): Product => {
    return {
        entity_id: "",
        sku: "",
        name: "",
        description: "",
        url_key: "",
        manufacturer: "",
        is_salable: 0,
        stock: 0,
        price: 0,
        tax: 0,
        promotion: "",
        promotion_discount: 0,
        new_product: 0
    }
}
const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    const getProductsFromServer = () => {
        getProducts()
            .then(new_products => {
                setProducts(new_products.products);
            })
    };
    getProductsFromServer()
    return (
        <div><p>{products?.map(p => <ProductComponent product={p}></ProductComponent>)} </p></div >
    )

};
export default ProductList;