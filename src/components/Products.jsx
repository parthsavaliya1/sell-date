import React from 'react'
import { products } from '../constant'
import ProductImg from '../../public/assets/img/product.jpg'

const Products = () => {
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    {products?.map((product, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div
                                    className="product__item__pic set-bg"
                                    data-setbg={ProductImg}
                                >
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6>
                                        <a href="#">{product?.title}</a>
                                    </h6>
                                    <div className="product__item__price">$32.00</div>
                                    <div className="cart_add">
                                        <a href="#">Enquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                  
                </div>
            </div>
        </section>
    )
}

export default Products
