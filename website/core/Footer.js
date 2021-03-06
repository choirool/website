/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    const docsUrl = this.props.config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="48"
                height="48"
              />
            )}
          </a>
          <div>
            <h5>Community</h5>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              target="_blank"
              data-icon="octicon-star"
              data-count-href="/iamkun/dayjs/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://gitter.im/iamkun/dayjs"
              target="_blank"
              rel="noreferrer noopener"
            >
              Gitter
            </a>
            <a
              href="./sitemap.xml"
              target="_blank"
            >
              Sitemap
            </a>
          </div>
        </section>

        <section className="copyright">
          {this.props.config.copyright}
        </section>
        <script src="https://buttons.github.io/buttons.js" async></script>
      </footer>
    )
  }
}

module.exports = Footer
