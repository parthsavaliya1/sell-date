import React from 'react'
import classVideo from '../../public/assets/img/class-video.jpg'
import aboutImg from '../../public/assets/img/about-date.jpg'
import ClientSlider from './slider/ClientSlider'
import OurTeam from './OurTeam'
import Footer from './Footer'
import { FaPlay } from 'react-icons/fa'
import { Why, Why2 } from '../constant'


const About = () => {
    return (
        <div>
            <>
                <div id="preloder">
                    <div className="loader" />
                </div>

                <div className="breadcrumb-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="breadcrumb__text">
                                    <h2>About</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="breadcrumb__links">
                                    <a href="/">Home</a>
                                    <span>About</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section  className="about spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about__video set-bg" data-setbg={classVideo}>
                                    <a
                                        href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                                        className="play-btn video-popup"
                                    >
                                        <FaPlay />

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-lg-6 col-md-6">
                                <div className="about__text">
                                    <div className="section-title">
                                        <span>About Us</span>
                                        <h2>Celebrate with natural chocolate 🍫</h2>
                                    </div>
                                    <p>
                                        Welcome to SPDC BITES , your go-to destination for exceptional date fruits. We take pride in sourcing the finest varieties from across the globe to offer you a taste of pure indulgence. At SPDC BITES , our commitment to quality is unwavering, ensuring each bite is a testament to the richness and authenticity of nature's bounty. Join us on a journey where passion meets purity, and discover the pleasure of savoring dates with SPDC BITES . Elevate your culinary experiences with the unparalleled sweetness and excellence that define our brand.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="about__bar">
                                    <img src={aboutImg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about spad">
                    <div className="container">

                        <div className="row">
                            <div className="section-title">
                                <span>Why?</span>
                                <h2>Amazing Benefits of Dry Dates</h2>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="about__text">
                                    <ul>

                                        {Why?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="about__text">
                                    <ul>

                                        {Why2?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ClientSlider />

                <OurTeam />

                <Footer />
                <div className="search-model">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>

            </>

        </div>
    )
}

export default About