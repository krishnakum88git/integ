import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout
    hero={{
      title: "404",
      subTitle: "The page you are looking for cannot be found."
    }}
  >
    <div style={{height: 200}} />
  </Layout>
)

export default NotFoundPage
