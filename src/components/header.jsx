import React from "react"
import logo from "../assets/images/orienteed-logo.svg"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Language from './language'

export default injectIntl(() => {
  return (
    < >
      <header>
        <section className="header__section">
          <Link to="/" ><img src={logo} alt="description" /></Link>
        </section>
        <section className="header__section">
          <Language/>
        </section>
      </header>
    </>
  )
})
