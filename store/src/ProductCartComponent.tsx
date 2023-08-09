import React from 'react'
import { useState } from 'react';
import { Product } from './Product'

const ProductComponent: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.manufacturer}</p>
            <p>{product.is_salable}</p>
            <p>{product.price}</p>
            <p>{product.price}</p>
            <p>{product.new_product}</p>
        </div>
    )
}
export default ProductComponent