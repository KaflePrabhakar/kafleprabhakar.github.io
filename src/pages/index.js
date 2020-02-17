import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Border from "../components/measure"
import Typerwiter from "../components/typewriter"
import Social from "../components/social"
import Particles from "react-particles-js"

const IndexPage = () => {
  const particle = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
  return (
    <Layout isCustom="custom-design home-page">
      <SEO
        title="Home"
        keywords={[
          `Prabhakar Kafle`,
          `Graphics Designer`,
          `Web Designer`,
          `Kathmandu`,
          `Olympiad`,
          `Nepal`,
          `Portfolio`,
        ]}
      />
      <Particles className="particles" params={particle} />
      <section className="front-page">
        <div className="page-body custom-bordered">
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <h2>
            I<span className="color-primary">'</span>M
          </h2>
          <h1>
            <span className="color-primary">P</span>RABHAKAR <br />
            <span className="color-primary">K</span>AFLE
            <span className="color-primary">.</span>
          </h1>

          <h3 className="primary-subtitle">
            A{" "}
            <Typerwiter
              text={["Laconic", "Web Designer", "Graphics Designer"]}
            />
          </h3>
          <h3>Cambridge, Massachusetts</h3>
          <Social call="home-page-social" />
          <Border stretch={true} />
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
