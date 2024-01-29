import React from 'react'
import Team from '../../public/assets/img/team/team-1.jpg'

const OurTeam = () => {
    return (
        <section className="team spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-7">
                        <div className="section-title">
                            <span>Our team</span>
                            <h2>Sweet Baker </h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="team__btn">
                            <a href="#" className="primary-btn">
                                Join Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {[0, 1, 2, 3]?.map((team, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg" data-setbg={Team}>
                                <div className="team__item__text">
                                    <h6>Randy Butler</h6>
                                    <span>Decorater</span>
                                    <div className="team__item__social">
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
                        </div>
                    ))}



                </div>
            </div>
        </section>
    )
}

export default OurTeam
