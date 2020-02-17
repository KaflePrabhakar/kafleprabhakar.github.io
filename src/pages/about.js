import React from "react"
import { Timeline, Event } from "../components/timeline"
import Bar from "../components/bar"
import Hobby from "../components/hobby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Border from "../components/measure"
import Particles from "react-particles-js"
import Circle from "../images/circle.svg"
import Arc from "../images/arc.svg"
import Zigzag from "../images/zigzag.svg"

const IndexPage = ({ data }) => {
  const particle = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      line_linked: {
        enable: false,
      },
      opacity: {
        value: 0.2,
        random: true,
        anim: {
          enable: false,
          speed: 0.5,
          opacity_min: 0.19,
          sync: true,
        },
      },
      shape: {
        stroke: {
          strokeWidth: 10,
        },
        type: ["images", "circle"],
        images: [
          {
            src: Circle,
            height: 5,
            width: 5,
          },
          {
            src: Arc,
            height: 20,
            width: 23,
          },
          {
            src: Zigzag,
            height: 30,
            width: 30,
          },
        ],
      },
      color: {
        value: "#fff",
      },
      size: {
        value: 30,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 15,
          sync: false,
        },
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
          enable: false,
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
          particles_nb: 1,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
  return (
    <Layout isCustom="">
      <SEO
        title="About"
        keywords={[
          `Prabhakar Kafle`,
          `Graphics Designer`,
          `Web Designer`,
          `Portfolio`,
          `Olympiad`,
          `About Prabhakar`,
          `MIT`,
          `GoldenGate International College`,
          `BKVM`,
          `Programming`,
          `Cricket`,
          `Chess`,
        ]}
      />
      <section className="section education text-center">
        <h2 className="section-header custom-bordered">
          Education
          <Border stretch={true} />
        </h2>
        <div className="section-content">
          <Timeline>
            <Event time="2019-2023" title="Undergraduate">
              Computer Science <em>(most probably)</em> <br />
              Massachusetts Institute of Technology (MIT) <br />
              Cambridge, Massachusetts, USA
            </Event>
            <Event time="2015-2017" title="High School">
              Science (Grade 11,12) <br />
              GoldenGate International Secondary School <br />
              Battisputali, Kathmandu, Nepal
            </Event>
            <Event time="2005-2015" title="Secondary School">
              Bal Kalyan Vidya Mandir (BKVM) Secondary School <br />
              Pichchhra, Biratnagar, Nepal
            </Event>
            <Event time="2003-2005" title="Primary School">
              Manitara Secondary School <br />
              Sarouchiya, Biratnagar, Nepal
            </Event>
          </Timeline>
        </div>
      </section>
      <section className="section skills text-center bg-color bg-secondary">
        <Particles className="particle-wrapper" params={particle} />
        <h2 className="section-header custom-bordered">
          Skills
          <Border stretch={true} />
        </h2>
        <div className="section-content">
          <div className="skills-list progress-bar-container">
            <Bar
              title="Front End Web Development"
              subtitle="HTML, CSS, Javascript, Jquery, React, Vue.js"
              length="75"
            />
            <Bar
              title="Back End Web Development"
              subtitle="PHP, MySQL, Wordpress, Flask"
              length="50"
            />
            <Bar
              title="Graphics Designing"
              subtitle="Adobe Photoshop, Adobe Illustrator"
              length="80"
            />
            <Bar title="Programming" subtitle="Python" length="40" />
          </div>
        </div>
      </section>
      <section className="section hobby text-center">
        <h2 className="section-header custom-bordered">
          Hobbies
          <Border stretch={true} />
        </h2>
        <div className="section-content">
          <div className="hobby-container">
            <Hobby icon={data.coding} title="Coding" />
            <Hobby icon={data.chess} title="Playing Chess" />
            <Hobby icon={data.puzzle} title="Solving Puzzle" />
            <Hobby icon={data.cricket} title="Playing Cricket" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    puzzle: file(relativePath: { eq: "puzzle.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    chess: file(relativePath: { eq: "chess.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    coding: file(relativePath: { eq: "coding.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cricket: file(relativePath: { eq: "cricket.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
