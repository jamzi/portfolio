import React from "react"

import Layout from "../components/layout"
import portrait from "../../static/portrait.jpg"

export default () => {
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <img
          src={portrait}
          style={{ width: "250px", height: "400px", marginRight: "50px" }}
          alt="portrait"
        />
        <div>
          <h2>Janez Čadež</h2>
          <h3>Full-Stack Developer</h3>
          <div>
            Software engineer and passionate about all things web. Also a gym
            enthusiast, self-improvement nerd, and amateur musician.
          </div>
        </div>
      </div>
    </Layout>
  )
}
