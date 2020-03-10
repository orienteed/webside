import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

export default injectIntl(props => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulMenu(filter: {name: {eq: "Footer"} }) {
      edges {
        node {
          node_locale
          links {
            value
            href
            }
          }
        }
      }
    }
  `)

  const Links = data.allContentfulMenu.edges.filter(
  data => data.node.node_locale === props.intl.locale)[0].node.links
  
  return (
    < >
      <footer className="footer">
          <div className="footer__container">
              <nav className="container__menu">
                  <ul>
                      {  Links.map(link => <li key={link.value}><a href={link.href}>{link.value}</a></li>)  }
                  </ul>
              </nav>
          </div>
      </footer>
    </>
  )
})