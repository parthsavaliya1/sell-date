import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'
import { main_slider } from '../../constant'
import Hero1 from '../../../public/assets/img/hero/hero-1.jpg'

const MainSlider = () => {
    return (
        <section className="hero">
            <ReactOwlCarousel className='hero-slider' loop="true" nav margin={0} items={1} dots="false" navText={["<i class='fa fa-angle-left'><i />", "<i class='fa fa-angle-right'><i />"]} animateOut="fadeOut" animateIn="fadeIn" smartSpeed={1200}
                autoHeight="false"
                autoplay="false">
                {main_slider?.map((item, index) => (
                    <div key={index} className="hero__item set-bg" data-setbg={Hero1}>
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <div className="hero__text">
                                        <h2>{item?.title}</h2>
                                        <a href="#" className="primary-btn">
                                            {item?.button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ReactOwlCarousel>
        </section>
    )
}

export default MainSlider
