import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'normalize.css'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <div css={[ styles.header ]}>
          <Header description={data.site.siteMetadata.description} />
        </div>
        <div css={[ styles.container ]}>
          {children}
          <footer css={[ styles.footer ]}>
            <span css={[ styles.copyright ]}>
              © {new Date().getFullYear()}
            </span>
            {' '}
            <span css={[ styles.title ]}>
              {data.site.siteMetadata.title}
            </span>
            {' '}
            by
            {' '}
            <a
              css={[ styles.link ]}
              href={'https://dhk.party'}
            >
              Donghee Kim
            </a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
  },
  header: {
    marginBottom: '5em',
  },
  footer: {
    textAlign: 'center',
    fontSize: '0.9em',
  },
  copyright: {
  },
  title: {
    padding: '0 0.2em',
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '1.1em',
  },
  link: {
    marginLeft: '0.2em',
    borderBottom: '2px solid black',
    textDecoration: 'none',
    fontWeight: 900,
    fontSize: '1.1em',
    color: 'black',
    ':hover': {
      color: '#087f5b',
      borderColor: '#5c940d',
    },
  },
}

export default Layout
