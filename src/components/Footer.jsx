import React from 'react'
import FooterBG from '../../public/assets/img/footer-bg.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer set-bg" data-setbg={FooterBG}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h6>WORKING HOURS</h6>
                                <ul>
                                    <li>Monday - Friday: 08:00 am – 08:30 pm</li>
                                    <li>Saturday: 10:00 am – 16:30 pm</li>
                                    <li>Sunday: 10:00 am – 16:30 pm</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
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
                        <div className="col-lg-4 col-md-6 col-sm-6">
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
                                    &copy; SPDC BITES {new Date().getFullYear()}, made with
                                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                                    <a href="https://colorlib.com" target="_blank">
                                        KPMD Team
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
        </div>
    )
}

export default Footer
