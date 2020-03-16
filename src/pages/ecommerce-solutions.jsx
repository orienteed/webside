import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from '../components/seo'
import Slider from "react-slick"

export default injectIntl( props => {
    const settings = {
        adaptiveHeight : true,
        autoplay: false,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [ 
            {
                breakpoint: 1024,
                settings: {
                     slidesToShow : 2
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow : 1
                }
            }
        ]
    }

    return (
        < >
            <Layout>
                <SEO title="Ecommerce solutions" />
                <main className="solutions">
                    <h1>{}</h1>
                    <div className="container">
                        <div className="container__section">
                                <div className="section__content">
                                    <div>
                                        <h1>{}</h1>
                                        <p>{}</p>
                                    </div>
                                    <div>
                                    <img src="" alt=""/>
                                    </div>
                                </div>
                                <div className="section__content">
                                    <div className="content">
                                        <div>
                                            {}
                                        </div>
                                        <div>
                                            {}
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div>{} </div>
                                        <div>{}</div>
                                    </div>
                                </div>
                            </div>
                        <hr/>
                        <div className="container__section">
                            <div className="section__content">
                                <div>
                                    <h1>{}</h1>
                                    <p>{}</p>
                                </div>
                                <div>
                                <img src="" alt=""/>
                                </div>
                            </div>
                            <div className="section__content">
                                <div className="content">
                                    <div>
                                    {}
                                    </div>
                                    <div>
                                    {}
                                    </div>
                                </div>
                                <div className="content">
                                    <div>{}</div>
                                    <div>{}</div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="container__section">
                            <div className="section__content">
                                <div>
                                    <h1>{}</h1>
                                    <p>{}</p>
                                </div>
                                <div>
                                <img src="" alt=""/>
                                </div>
                            </div>
                            <div className="section__content">
                                <div>   
                                    {}
                                </div>
                                <div>
                                    {}
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="container__section">
                            <div className="section__content">
                                <div>
                                    <h1>{}</h1>
                                    <p>{}</p>
                                </div>
                                <div>
                                <img src="" alt=""/>
                                </div>
                            </div>
                            <div className="section__content">
                                <div className="content">
                                    <div>
                                        {}
                                    </div>
                                    <div>
                                        {}
                                    </div>
                                </div>
                                <div className="content">
                                    <div>{}</div>
                                    <div>{}</div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container__section">
                            <h2>Quiero saber más</h2>
                            <Slider {...settings}>
                                    <div><img src="https://via.placeholder.com/300x300" alt=""/></div>
                                    <div><img src="https://via.placeholder.com/300x300" alt=""/></div>
                                    <div><img src="https://via.placeholder.com/300x300" alt=""/></div>
                                    <div><img src="https://via.placeholder.com/300x300" alt=""/></div>
                                    <div><img src="https://via.placeholder.com/300x300" alt=""/></div>
                            </Slider>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
})

