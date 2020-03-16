import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import Slider from '../components/slider'
import { injectIntl, Link } from "gatsby-plugin-intl"
import { graphql } from 'gatsby'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default injectIntl(props => {
    
  const { section1, section2, section3, section4, section5 } = props.data

  return (
    < >
      <Layout>
        <SEO title="Home"/>
          {
            <main className="hp">
              <div className="container">
                <section className="container__section">
                  <div className="section__content">
                    <h1>{section1.title}</h1>
                    <p>{section1.data.content}</p>
                  </div>
                  <div className="section__cta">
                      {section1.cta.map(cta => (
                        <Link key={cta.id} to={cta.href}>{cta.value}</Link>
                      ))}
                  </div>
                </section>
                <hr />
                <section className="container__section">
                  <div className="section__content">
                    <h2>{section2.title}</h2>
                    <p>{section2.data.content}</p>
                  </div>
                  <div className="section__video">
                    <video controls>
                      <source src={section2.media[0].file.url} type="video/mp4" />
                    </video>
                  </div>
                </section>
                <hr />
                <section className="container__section">
                  <div className="section__content">
                    <h2>{section3.title}</h2>
                  </div>                
                  <div className="section__brands"> 
                    {section3.media.map(img => (
                        <div className="brand" key={img.id}>
                          <div className="brand__logo">
                            <img src={img.file.url} alt={img.file.title}/>  
                          </div>
                          <div className="brand__text">
                            <p>{img.description}</p>
                          </div>
                        </div>    
                    ))}  
                  </div>                
                </section>
                <hr />                
                <section className="container__section">                
                    <div className="section__content">
                      <h2>{section4.title}</h2>
                      <p>{section4.data.content}</p>
                    </div>                
                    <div className="section__image">
                        <img src={section4.media[0].file.url} width="400px" />
                    </div>                
                </section>                
                <hr />                
                <section className="container__section">
                    <Slider content={section5}/>
                </section>            
              </div>
            </main>
          }
      </Layout>
    </>
  )
})

  export const query = graphql`
  query($locale: String) {
    section1 : contentfulSection(name: {eq: "HP-section-1"}, node_locale: {eq: $locale}) {
      title
      cta {
          id
          value
          href
        }
      data {
          content
        }
    }

    section2 : contentfulSection(name: {eq: "HP-section-2"}, node_locale: {eq: $locale}) {
      title
      media {
        file {
          url
        }
      }
      data {
        content
      }
    }

    section3: contentfulSection(name: {eq: "HP-section-3"}, node_locale: {eq: $locale}) {
      title
      media {
        id
        title
        description
        file {
          url
        }
      }
    }

    section4: contentfulSection(name: {eq: "HP-section-4"}, node_locale: {eq: $locale}) {
      title
      media {
        title
        description
        file {
          url
        }
      }
      data {
        content
      }
    }

    section5: contentfulSection(name: {eq: "HP-section-5"}, node_locale: {eq: "es"}) {
      media {
        title
        description
        file {
          url
        }
      }
    }

}`