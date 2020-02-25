import { keyframes, css } from "@emotion/core"
import styled from "@emotion/styled"

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 225 100 400 200 Q 575 300 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 175 250 400 200 Q 625 150 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(600px);
  }
`

const upDownAnimation = css`
  ${upDown} 85s infinite alternate;
`

const upDownWideAnimation = css`
  ${upDownWide} 90s infinite alternate;
`

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const waveAnimation = (length: string) => css`
  animation: ${wave} ${length} linear infinite alternate;
`