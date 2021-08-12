/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <a
    className="project-card"
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: ``,
      //position: ``,
      textDecoration: `none`,
      borderRadius: `13px`,
      px: 4,
      py: [4, 5],
      color: `text_bright`,
      backgroundColor: 'project_card_bg',
      transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        transform: `translateY(-12px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div sx={{ margin: 0, padding: '1em', opacity: 1, textShadow: `none` }}>{children}</div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }
    }
    >
      {title}
    </div>
  </a>
)

export default ProjectCard
