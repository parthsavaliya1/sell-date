import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer set-bg" data-setbg="img/footer-bg.jpg">

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
