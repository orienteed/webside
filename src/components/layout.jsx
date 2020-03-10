import React from "react"
import Header from "./header"
import Footer from "./footer"
import { injectIntl } from "gatsby-plugin-intl"
import '../assets/styles/main.scss'

export default injectIntl(({children}) => {
  return (
    < >
      <Header />
        <main>
          {children}
        </main>
      <Footer/>
    </>
  )
})
