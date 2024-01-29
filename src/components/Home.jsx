import React from 'react'
import { FaPlay } from "react-icons/fa";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import MainSlider from './slider/MainSlider';
import CategorySlider from './slider/CategorySlider';
import Products from './Products';
import classVideo from '../../public/assets/img/class-video.jpg'
import OurTeam from './OurTeam';
import ClientSlider from './slider/ClientSlider';
import Gallery from './Gallery';

const Home = () => {


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
        <div>
            <>
                <div id="preloder">
                    <div className="loader" />
                </div>

                <MainSlider />

                <CategorySlider />

                <Products />

                <section className="class spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="class__form">
                                    <div className="section-title">
                                        <span>Class cakes</span>
                                        <h2>
                                            Send Us Your Thoughts  <br />
                                            and Inquiries
                                        </h2>
                                    </div>
                                    <form action="#">
                                        <input type="text" placeholder="Name" />
                                        <input type="text" placeholder="Phone" />

                                        <input type="text" placeholder="Type your requirements" />
                                        <button type="submit" className="site-btn">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="class__video set-bg" data-setbg={classVideo}>
                            <a
                                href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                                className="play-btn video-popup"
                            >
                                <FaPlay />
                            </a>
                        </div>
                    </div>
                </section>

                <OurTeam />

                <ClientSlider />

                <Gallery />

                <div className="map">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-7">
                                <div className="map__inner">
                                    <h6>COlorado</h6>
                                    <ul>
                                        <li>Revenue Survey No.92,Plot No.21, Parmeshwar Park  Society, Kuvadava Road, Opp.IOC Plant Navagam, Rajkot, Gujarat.</li>
                                        <li>spdcbites@gmail.com</li>
                                        <li>+91 7490036075</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map__iframe">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10784.188505644011!2d19.053119335158936!3d47.48899529453826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1543907528304"
                            height={300}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                </div>


                <div className="search-model">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
                {/* Search End */}
                {/* Js Plugins */}
            </>

        </div >
    )
}

export default Home