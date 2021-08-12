import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"


let isMobile = false
if (typeof window !== "undefined") {
    if (window.innerHeight < 800) {
        isMobile = true
    }
}

const Cara = () => (
    <Layout>
        <Parallax pages={isMobile ? 11.5 : 6.5}>
            <Hero offset={0} />
            <Projects offset={isMobile ? 2.5 : 1.25} />
            <About offset={isMobile ? 6.5 : 3} />
            <Contact offset={isMobile ? 9 : 4.5} />
        </Parallax>
    </Layout>
)

export default Cara
