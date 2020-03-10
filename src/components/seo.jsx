import _ from 'lodash'
import React from 'react'
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
    const data = useStaticQuery(graphql`
        query  {
            contentfulSeo {
            title
            lang
            attributes {
                name
                property
                content
                }
            }
        }`)
  
    const title = props.title || data.contentfulSeo.title 
    const lang  = data.contentfulSeo.lang
    const metaList = _.map(data.contentfulSeo.attributes, item => _.pickBy(item))
    
    if (props.keywords) {
        metaList.filter(data => data.name === 'keywords')[0].content = props.keywords
    }
    
    if (props.description) {
        metaList.filter(data => data.name === 'description')[0].content = props.description
    }

    return (
        <Helmet
          htmlAttributes={{lang}}
          title={data.contentfulSeo.title}
          titleTemplate={`%s | ${title}`}
          meta={metaList}
        />
    )
}