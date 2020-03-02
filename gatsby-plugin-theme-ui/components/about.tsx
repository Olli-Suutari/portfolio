/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset }: { offset: number }) => (
  <div>
    <Divider bg="linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);" clipPath="polygon(0 2%, 100% 0%, 100% 97%, 0 100%)" speed={0.05} offset={offset} factor={5.5} />
    <Content speed={0.2} offset={offset}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
