import React from "react"

import Layout from "../components/layout"

const items = {
  Hardware: [
    {
      id: "Laptop",
      name: "Lenovo Thinkpad T480s",
      url:
        "https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-t-series/ThinkPad-T480s/p/22TP2TT480S",
    },
    {
      id: "Monitor",
      name: "Viewsonic VA2719-2k-SMHD",
      url: "https://www.viewsonic.com/us/va2719-2k-smhd.html",
      comment: "Cheap and decent 2K 27inch monitor",
    },
    {
      id: "Keyboard",
      name: "ThinkPad Compact Bluetooth Keyboard",
      url:
        "https://www.amazon.com/ThinkPad-Compact-Bluetooth-Keyboard-TrackPoint/dp/B00C32FWJC",
      comment: "Lenovo Thinkpad style keys",
    },
    {
      id: "Mouse",
      url: "https://www.logitech.com/en-us/product/mx-vertical-ergonomic-mouse",
      name: "Logitech MX Vertical",
    },
    {
      id: "Headphones #1",
      name: "Sony WH1000XM2",
      url:
        "https://www.amazon.com/Sony-Noise-Cancelling-Headphones-WH1000XM2/dp/B074KDJVS2",
      comment:
        "Must-have noise cancelling headphones for open office. Good alternative to Bose QC35 series",
    },
    {
      id: "Headphones #2",
      name: "Jabra Elite 65t",
      url: "https://www.jabra.com/bluetooth-headsets/jabra-elite-65t",
      comment:
        "In-ear noise cancelling headphones, good alternative to Apple AirPods",
    },
    {
      id: "Laptop bag",
      name: "Aer Fit Pack 2",
      url: "https://www.aersf.com/fit-pack-2-black",
      comment: "Office + gym backpack",
    },
    {
      id: "Phone",
      name: "OnePlus 5T",
      url: "https://www.oneplus.com/global/5t",
      comment: "Near-stock and performant Android phone",
    },
  ],
  Software: [
    {
      id: "OS",
      name: "Windows 10",
      url: "https://www.microsoft.com/sl-si/windows",
      comment:
        "Works great with the Thinkpad laptop, has Windows Hello unlock, etc",
    },
    {
      id: "IDE",
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
    },
    {
      id: "VSCode extensions",
      name:
        "Project manager, CSS to JSS, Color Highlight, ESLint, GitLens, Polacode, Prettier, Sort Lines, TODO Highlight, Wrap Console Log",
      url: "https://marketplace.visualstudio.com/VSCode",
    },
    {
      id: "Other",
      name: "Stretchly",
      url: "https://hovancik.net/stretchly/",
      comment: "Break time reminder app",
    },
  ],
}

export default () => {
  const renderSection = type => {
    return items[type].map(item => (
      <div key={item.id} style={{ marginBottom: "20px" }}>
        <div style={{ fontWeight: "bold" }}>{item.id}</div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <a
            style={{ marginRight: "5px" }}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
          <div style={{ color: "#828282" }}>{`${
            item.comment !== undefined ? `(${item.comment})` : ""
          }`}</div>
        </div>
      </div>
    ))
  }

  return (
    <Layout>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ margin: "0px 10px 0px 0px" }}>What Do I Use?</h2>
        <span style={{ color: "#828282" }}>Updated: April 2020</span>
      </div>
      <h3>Hardware</h3>
      {renderSection("Hardware")}
      <h3>Software</h3>
      {renderSection("Software")}
      <div>
        If you like this kind of content check out{" "}
        <a href="https://uses.tech" target="_blank" rel="noopener noreferrer">
          uses.tech
        </a>{" "}
        for more developer's setups.
      </div>
    </Layout>
  )
}
