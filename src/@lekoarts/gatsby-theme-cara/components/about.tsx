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
    <Divider bg="icon_darker" clipPath="polygon(0 2%, 100% 0%, 100% 97%, 0 100%)" speed={0.05} offset={offset} factor={5.5} />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} color="icon_blue" left="84%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_orange" left="82%" top="125%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" hiddenMobile width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="93%" top="10%" />
        <SVG icon="triangle"  width={12} stroke color="icon_brightest" left="5%" top="180%" />
        <SVG icon="hexa" width={16} stroke color="icon_brightest" left="70%" top="250%" />
      </UpDownWide>
      <SVG icon="hexa" hiddenMobile width={12} stroke color="icon_red" left="45%" top="30%" />
      <SVG icon="box" hiddenMobile width={8} color="icon_blue" left="6%" top="130%" />
      <SVG icon="box" width={8} color="icon_blue" left="10%" top="240%" />
      <SVG icon="circle" width={12} color="icon_orange" left="45%" top="210%" />
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" hiddenMobile width={12} color="icon_darkest" left="2%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" hiddenMobile width={12} color="icon_darkest" left="3%" top="40%" />
      <SVG icon="hexa" width={8} stroke color="icon_darkest" left="95%" top="10%" />
      <SVG icon="triangle" width={12} stroke color="icon_green" left="70%" top="175%" />
    </Divider>
    <Content speed={0.2} offset={offset}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
