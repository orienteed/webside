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
            <div className="container">

              <section className="container__section">

                <div className="section__content">
                  <h1>{section1.edges[0].node.title}</h1>
                  <p>{section1.edges[0].node.content.content}</p>
                </div>

                <div className="section__cta">
                  <Link to={section1.edges[0].node.cta[0].href}>{section1.edges[0].node.cta[0].value}</Link>
                  <Link to={section1.edges[0].node.cta[1].href}>{section1.edges[0].node.cta[1].value}</Link>
                </div>

              </section>

              <hr />

              <section className="container__section">
              
                <div className="section__content">
                  <h2>{section2.edges[0].node.title}</h2>
                  <p>{section2.edges[0].node.content.content}</p>
                </div>
                
                <div className="section__video">
                  <video controls>
                    <source src={section2.edges[0].node.media[0].file.url} type="video/mp4" />
                  </video>
                </div>
              
              </section>

              <hr />
              
              <section className="container__section">
              
                <div className="section__content">
                  <h2>{section3.edges[0].node.title}</h2>
                </div>
              
                <div className="section__brands">
                
                  <div className="brand">
                    <div className="brand__logo">
                      <img src={section3.edges[0].node.media[0].file.url} alt={section3.edges[0].node.media[0].file.title}/>  
                    </div>
                    <div className="brand__text">
                      <p>{section3.edges[0].node.media[0].description}</p>
                    </div>
                  </div>
                
                  <div className="brand">
                    <div className="brand__logo">
                        <img src={section3.edges[0].node.media[1].file.url} alt={section3.edges[0].node.media[1].file.title} />  
                      </div>
                      <div className="brand__text">
                        <p>{section3.edges[0].node.media[1].description}</p>
                    </div>
                  </div>
                
                  <div className="brand">
                    <div className="brand__logo">
                        <img src={section3.edges[0].node.media[2].file.url} alt={section3.edges[0].node.media[2].file.title} />  
                      </div>
                      <div className="brand__text">
                        <p>{section3.edges[0].node.media[2].description}</p>
                    </div>
                  </div>
                
                </div>
              
              </section>

              <hr />
              
              <section className="container__section">
              
                  <div className="section__content">
                    <h2>{section4.edges[0].node.title}</h2>
                    <p>{section4.edges[0].node.content.content}</p>
                  </div>
              
                  <div className="section__image">
                      <img src={section4.edges[0].node.media[0].file.url} width="400px" />
                  </div>
              
              </section>
              
              <hr />
              
              <section className="container__section">
                  <Slider content={section5.edges[0].node}/>
              </section>
            
            </div>
          }
      </Layout>
    </>
  )
})

  export const query = graphql`
  query ContentfulSections($locale: String) {
    section1: allContentfulSection(filter: {node_locale: {eq: $locale}, name: {eq: "HP-section-1"}}) {
      edges {
        node {
          title
          content {
            content
          }
          cta {
            value
            href
          }
        }
      }
    }
    section2: allContentfulSection(filter: {node_locale: {eq: $locale}, name: {eq: "HP-section-2"}}) {
      edges {
        node {
          title
          content {
            content
          }
          media {
            file {
              url
            }
          }
        }
      }
    }
    section3 : allContentfulSection(filter: {node_locale: {eq: $locale}, name: {eq: "HP-section-3"}}) {
      edges {
        node {
          title
          content {
            content
          }
          cta {
            value
          }
          media {
            file {
              url
            }
            title
            description
          }
        }
      }
    }
    section4 : allContentfulSection(filter: {node_locale: {eq: $locale}, name: {eq: "HP-section-4"}}) {
      edges {
        node {
          title
          content {
            content
          }
          media {
            file {
              url
            }
            title
            description
          }
        }
      }
    }
    section5 : allContentfulSection(filter: {node_locale: {eq: $locale}, name: {eq: "HP-section-5"}}) {
    edges {
      node {
        title
        media {
          file {
            url
          }
          title
          description
        }
      }
    }
  }
}`