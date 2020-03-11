import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo.jsx"
import { injectIntl } from "gatsby-plugin-intl"

export default injectIntl(() => (
  < >
    <Layout>
      <SEO title="Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
))
