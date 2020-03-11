import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'
import { injectIntl } from "gatsby-plugin-intl"

export default injectIntl(() => {
    return (
        < >
            <Layout>
                <SEO title="Social" />
                <h1>Welcome Social</h1>
            </Layout>
        </>
    )
})