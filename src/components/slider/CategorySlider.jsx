import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import { category_slider } from '../../constant';
import ProductImg from '../../../public/assets/img/product.jpg'


const CategorySlider = () => {
   
    return (
        <div className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider">
                        <ReactOwlCarousel loop="true" nav margin={22} items={5} dots="false" navText={["<i class='fa fa-angle-left'><i />", "<i class='fa fa-angle-right'><i />"]} animateOut="fadeOut" animateIn="fadeIn" smartSpeed={1200}
                            autoHeight="false"
                            autoplay="true" responsive={
                                {
                                    0: {
                                        items: 1,
                                        margin: 0
                                    },
                                    480: {
                                        items: 2
                                    },
                                    768: {
                                        items: 3
                                    },
                                    992: {
                                        items: 6
                                    },
                                    1200: {
                                        items: 5
                                    }
                                }
                            } >
                            {category_slider?.map((dates, index) => (
                                <div key={index} className="categories__item category-item">
                                    <div className="categories__item__icon">
                                        <img className='category-img' src={ProductImg} />
                                        <h5>{dates?.name}</h5>
                                    </div>
                                </div>
                            ))}


                        </ReactOwlCarousel>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorySlider
