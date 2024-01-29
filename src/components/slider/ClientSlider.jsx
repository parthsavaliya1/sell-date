import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel'

const ClientSlider = () => {
    const testimonialOption = {
        loop: true,
        margin: 0,
        items: 2,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    }
    return (
        <section className="testimonial spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title">
                            <span>Testimonial</span>
                            <h2>Our client say</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ReactOwlCarousel className='testimonial__slider' loop="true" nav margin={20} items={2} dots="false" navText={["<i class='fa fa-angle-left'><i />", "<i class='fa fa-angle-right'><i />"]} animateOut="fadeOut" animateIn="fadeIn" smartSpeed={1200}
                        autoHeight="false"
                        autoplay="true" responsive={
                            {
                                0: {
                                    items: 1
                                },
                                768: {
                                    items: 2
                                }
                            }
                        }>
                        {[0, 1, 2, 3]?.map((item, index) => (
                            <div key={index} className="col-lg-6" style={{width:"100%"}}>
                                <div className="testimonial__item">
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src="img/testimonial/ta-1.jpg" alt="" />
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>Kerry D.Silva</h5>
                                            <span>New york</span>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <span className="icon_star" />
                                        <span className="icon_star" />
                                        <span className="icon_star" />
                                        <span className="icon_star" />
                                        <span className="icon_star-half_alt" />
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        viverra lacus vel facilisis.
                                    </p>
                                </div>
                            </div>
                        ))}


                    </ReactOwlCarousel>

                </div>
            </div>
        </section>
    )
}

export default ClientSlider