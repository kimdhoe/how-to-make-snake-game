import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[ 'gatsby', 'application', 'react' ]} />
    <h2>How to Make Worm Game</h2>
    <p>Welcome</p>
  </Layout>
)

export default IndexPage
