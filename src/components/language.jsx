import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

export default () => {

  const languageName = {
    en: "English",
    es: "Spanish",
  }
  
  return(
    < >
      <IntlContextConsumer>
        {
          ({ languages, language: currentLocale }) =>
            <select value={currentLocale} onChange={e => changeLocale(e.target.value)} onBlur={e => changeLocale(e.target.value)}>
              {
                languages.map(lang => (
                  <option key={lang} value={lang}>{languageName[lang]}</option>
                ))
              }
            </select>
        }
      </IntlContextConsumer>
    </>
  )
}
