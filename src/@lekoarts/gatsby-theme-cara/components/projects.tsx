/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = ({ offset }: { offset: number }) => (
  <div>

    <Divider bg="projectsBg" clipPath="polygon(0 3%, 100% 5%, 100% 84%, 0 88%)" speed={0.05} offset={1.1} factor={7.5} />
    <Content speed={0.4} offset={offset + 0.2} factor={2}>
      <Inner>
        <div
          className="project-card-list"
          sx={{
            color: 'heading_bright',
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1` },
            h: { color: `#fdfdfd` },
            //h3: { color: '#1a202c' },
            p: { color: 'text_bright' },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
  </div>
)

export default Projects
