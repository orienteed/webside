import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from '../components/seo'
import Slider from "react-slick"

export default injectIntl(props => {
    
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

    const { section1, section2, section3, section4 } = props.data

    console.log(section4)
 
    return (
        < >
            <Layout>
                <SEO title="Ecommerce projects" />
                <main className="projects">
                    <h1>{}</h1>
                    <div className="container">

                        <div className="container__section">                            
                            <div className="section__content">
                                <div>
                                    <h1>{section1.title}</h1>
                                    <p>{section1.data.content1}</p>
                                </div>
                                <div>
                                    <img src={section1.media[0].file.url} alt={section1.media[0].title}/>
                                </div>
                            </div>
                            <div className="section__content">
                                <div>
                                    {section1.data.content2}
                                </div>
                                <div>
                                    {section1.data.content3}
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="container__section">                            
                            <div className="section__content">
                                <div>
                                    <h1>{section2.title}</h1>
                                    <p>{section2.data.content1}</p>
                                </div>
                                <div>
                                    <img src={section2.media[0].file.url} alt={section2.media[0].title}/>
                                </div>
                            </div>
                            <div className="section__content">
                                <div>
                                    {section2.data.content2}
                                </div>
                                <div>
                                    {section2.data.content3}
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="container__section">                            
                            <div className="section__content">
                                <div>
                                    <h1>{section3.title}</h1>
                                    <p>{section3.data.content1}</p>
                                </div>
                                <div>
                                    <img src={section3.media[0].file.url} alt={section3.media[0].title}/>
                                </div>
                            </div>
                            <div className="section__content">
                                <div>
                                    {section3.data.content2}
                                </div>
                                <div>
                                    {section3.data.content3}
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="container__section">
                            <h2>{section4.title}</h2>
                            <Slider {...settings}>
                                {section4.blogEntrys.map(entry => (
                                    <div key={entry.picture.id}><img src={entry.picture.file.url} alt={entry.picture.title}/></div>
                                ))}

                            </Slider>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
})

export const query = graphql`
query($locale: String) {
    section1: contentfulSection(name: {eq: "EP-section-1"}, node_locale: {eq: $locale}) {
        title
        data {
            content1
            content2
            content3
        }
        media {
            title
            file {
            url
            }
        }
    }

    section2: contentfulSection(name: {eq: "EP-section-2"}, node_locale: {eq: $locale}) {
        title
        data {
            content1
            content2
            content3
        }
        media {
            title
            file {
            url
            }
        }
    }

    section3: contentfulSection(name: {eq: "EP-section-3"}, node_locale: {eq: $locale}) {
        title
        data {
            content1
            content2
            content3
        }
        media {
            title
            file {
            url
            }
        }
    }

    section4: contentfulSection(name: {eq: "EP-section-4"}, node_locale: {eq: "es"}) {
        title
        blogEntrys {
          picture {
            id
            title
            file {
              url
            }
          }
        }
      }
}`