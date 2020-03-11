import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'
import { injectIntl } from "gatsby-plugin-intl"


export default injectIntl(() => {
    return (
        < >
            <Layout>
                <SEO title="About" />
                <h1>Welcome About</h1>
            </Layout>
        </>
    )
})