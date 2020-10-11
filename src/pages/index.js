import React from "react"
import Header from '../components/header'

import HomePage from '../components/Home/index.js'

import '../css/style.css'

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      
      <div className="container">
        <HomePage />
      </div>
    </div>
  )
}
