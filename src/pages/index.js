import React from "react"
import Layout from '../components/Layout'

import HomePage from '../components/Home/index.js'

import '../css/style.css'

export default function Home() {
  return (
    <Layout>
      <div className="wrapper">      
        <HomePage />
      </div>      
    </Layout>
  )
}
