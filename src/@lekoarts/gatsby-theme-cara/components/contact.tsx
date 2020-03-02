/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
// @ts-ignore
import ContactMDX from "../sections/contact"
import Footer from "./footer"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`33s`)};
  }
`

const Contact = ({ offset }: { offset: number }) => (
  <div>
    <Divider bg="contactBg" clipPath="polygon(0 0%, 100% 2%, 100% 95%, 0 100%)" speed={0.05} offset={offset} factor={5.5} />

    <Content speed={0.4} offset={offset} >
      <Inner>
        <ContactMDX />
      </Inner>
    </Content>
    <Footer />

    <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)`, fill:"divider" }}>
        <InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `150%`,  minHeight: '0px', height: `100vh` } }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="43s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
  </div>
)

export default Contact
