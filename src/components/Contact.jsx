import React from 'react'

const Contact = () => {
    return (
        <>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>

            <section className="contact spad">
                <div className="container">
                    <div className="map">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
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
                           
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59078.177577189694!2d70.70402672167968!3d22.263359700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc23ecadb07%3A0x4c0b6069f5153b5e!2sParmeshwar%20Park-1!5e0!3m2!1sen!2sin!4v1706178425939!5m2!1sen!2sin" height={300}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex={0}></iframe>
                        </div>
                    </div>
                    <div className="contact__address">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>san bernardino</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt" />
                                            <p>795 W 5th St, San Bernardino, CA 92410, USA</p>
                                        </li>
                                        <li>
                                            <span className="icon_headphones" />
                                            <p>+1 800-786-1000</p>
                                        </li>
                                        <li>
                                            <span className="icon_mail_alt" />
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>Los angeles</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt" />
                                            <p>639 S Spring St, Los Angeles, CA 90014, USA</p>
                                        </li>
                                        <li>
                                            <span className="icon_headphones" />
                                            <p>+1 213-612-3000</p>
                                        </li>
                                        <li>
                                            <span className="icon_mail_alt" />
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact__address__item">
                                    <h6>san bernardino</h6>
                                    <ul>
                                        <li>
                                            <span className="icon_pin_alt" />
                                            <p>1000 Lakepoint Dr, Frisco, CO 80443, USA</p>
                                        </li>
                                        <li>
                                            <span className="icon_headphones" />
                                            <p>+1 800-786-1000</p>
                                        </li>
                                        <li>
                                            <span className="icon_mail_alt" />
                                            <p>Sweetcake@support.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </section>
         
            <footer className="footer set-bg" data-setbg="img/footer-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer__widget">
                                <h6>WORKING HOURS</h6>
                                <ul>
                                    <li>Monday - Friday: 08:00 am – 08:30 pm</li>
                                    <li>Saturday: 10:00 am – 16:30 pm</li>
                                    <li>Sunday: 10:00 am – 16:30 pm</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="#">
                                        <img src="img/footer-logo.png" alt="" />
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore dolore magna aliqua.
                                </p>
                                <div className="footer__social">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-youtube-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer__newslatter">
                                <h6>Subscribe</h6>
                                <p>Get latest updates and offers.</p>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit">
                                        <i className="fa fa-send-o" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <p className="copyright__text text-white">
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with{" "}
                                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                                    <a href="https://colorlib.com" target="_blank">
                                        Colorlib
                                    </a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                            <div className="col-lg-5">
                                <div className="copyright__widget">
                                    <ul>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Site Map</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
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

    )
}

export default Contact
