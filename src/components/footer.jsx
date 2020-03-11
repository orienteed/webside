import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
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
  
  console.log(Links)
  return (
    < >
      <footer className="footer">
          <div className="footer__container">
              <nav className="container__menu">
                  <ul>
                      {  Links.map(link => <li key={link.value}><Link to={link.href}>{link.value}</Link></li>)  }
                  </ul>
              </nav>
          </div>
      </footer>
    </>
  )
})