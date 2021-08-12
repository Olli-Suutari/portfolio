/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Divider bg="background" speed={0.2} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="box" hiddenMobile width={16} color="icon_darker" left="17%" top="70%" />
        <SVG icon="triangle" width={12} stroke color="icon_darker" left="90%" top="50%" />
        <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke color="icon_darker" left="92%" top="65%" />
        <SVG icon="upDown" width={12} color="icon_darker" left="21%" top="5%" />
        <SVG icon="circle" width={6} color="icon_darker" left="75%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="86%" top="30%" />
      <SVG icon="triangle" width={8} stroke color="icon_darkest" left="35%" top="3%" />
      <SVG icon="circle" width={6} color="icon_darkest" left="95%" top="5%" />
      <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="box" width={8} color="icon_darkest" left="56%" top="12%" />
      <SVG icon="hexa" width={16} stroke color="icon_darkest" left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content className={`hero-container`} sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
