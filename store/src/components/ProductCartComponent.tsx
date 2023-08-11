import React from 'react'
import { Product } from '../Product'
import '../styles/ProductCartComponent.css'

const ProductCartComponent: React.FC<{ product: Product }> = ({ product }) => {
    const fixDecimals = (x: number) => {
        return parseFloat(((x * 100) / 100).toFixed(2))
    }
    const getBrutto = (p: Product) => {
        let price = (p.price * (1 - p.promotion_discount / 100)) * (1 + p.tax / 100)
        return fixDecimals(price)
    }
    return (
        <div>
            <table className='outside-table'>
                <tbody>
                    <tr className='new-marker'>
                        <strong>{product.new_product ? 'New!!!' : ""}</strong>
                    </tr>
                    <tr>
                        <th>
                            <div className='divheader'>
                                <h3>
                                    <strong>{product.name}</strong>
                                </h3>
                                <p>{product.description}</p>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <table className='inside-table'>
                                <tbody>
                                    <tr>
                                        <th className='label'>Manufacturer:</th>
                                        <th className='label-value'>
                                            <strong>{product.manufacturer}</strong>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className='label'>In stock:</th>
                                        <th className='label-value'>
                                            <strong>{product.stock}</strong>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className='label'>Price (netto):</th>
                                        <th className='label-value'>
                                            <strong>${fixDecimals(product.price)}</strong>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className='label'>Price (brutto):</th>
                                        <th className='label-value'>
                                            <strong>${getBrutto(product)}</strong>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                    </tr >
                </tbody >
            </table >
        </div >
    );
};

export default ProductCartComponent