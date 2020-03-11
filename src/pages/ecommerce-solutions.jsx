import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from '../components/seo'


export default injectIntl(() => {
    return (
        < >
            <Layout>
                <SEO title="Ecommerce solutions" />
                <h1>Welcome ecommerce solutions</h1>
            </Layout>
        </>
    )
})