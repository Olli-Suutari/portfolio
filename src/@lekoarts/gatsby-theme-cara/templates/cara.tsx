import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"


let totalPages = 6.5
let projectOffset = 1.25
let aboutOffset = 3
let contactOffset = 4.5
if (typeof window !== "undefined") {
    const adjustSectionHeights = () => {
        if (window.innerHeight < 650) {
            totalPages = 11.5
            projectOffset = 2.5
            aboutOffset = 7
            contactOffset = 9
        }
        else if (window.innerHeight < 850) {
            totalPages = 11
            projectOffset = 2
            aboutOffset = 6
            contactOffset = 8
        }
        else if (window.innerHeight < 1050) {
            totalPages = 10
            projectOffset = 1.9
            aboutOffset = 4.5
            contactOffset = 7
        }
        else if (window.innerHeight < 1300) {
            totalPages = 8.5
            projectOffset = 1.6
            aboutOffset = 4
            contactOffset = 6
        }
    };
    // Add event listener for resizing the view.
    window.addEventListener('resize', adjustSectionHeights)
    adjustSectionHeights()
}

const Cara = () => (
    <Layout>
        <Parallax pages={totalPages}>
            <Hero offset={0} />
            <Projects offset={projectOffset} />
            <About offset={aboutOffset} />
            <Contact offset={contactOffset} />
        </Parallax>
    </Layout>
)

export default Cara
