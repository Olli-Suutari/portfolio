import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

 let Cara = () => (
  <Layout>
    <Parallax pages={5.6}>
      <Hero offset={0} />
      <Projects offset={1} />
      <About offset={2.7 } />
      <Contact offset={3.5 } />
    </Parallax>
  </Layout>
)

let windowHeight = 0;
let windowWidth = 0;
let offsetMobile = 0;
let offsetProjects = 0;
let offSetAbout = 0;
let offSetContact = 0;
let projectCollumns = 2;

function calculateOffset() {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  if (windowWidth < 800) {
    projectCollumns = 1;
  }
  if (projectCollumns === 1) {
    offsetMobile = 2;
    offsetProjects = 1.5;
    offSetAbout = .85;
    if (windowHeight < 600) {
      offsetProjects = offsetProjects + .75;
      offSetAbout = offSetAbout + 1.35;
      offSetContact = offSetContact -.35;
    }

    else if (windowHeight < 800) {
      offsetProjects = offsetProjects;
      offSetAbout = offSetAbout + .95;
      offSetContact = offSetContact -.35;
    }
    else if (windowHeight < 1000) {
      offsetProjects = offsetProjects + .15;
      offSetAbout = offSetAbout + .65
      offSetContact = offSetContact -.35;
    }
  }
  else {
    if (windowHeight < 600) {
      offsetProjects = offsetProjects + .75;
      offSetAbout = offSetAbout + 1.35;
    }
    else if (windowHeight < 800) {
      offsetProjects = offsetProjects;
      offSetAbout = offSetAbout + .95;
    }
    else if (windowHeight < 1000) {
      offsetProjects = offsetProjects + .15;
      offSetAbout = offSetAbout + .65
    }
  }
  offSetAbout = offSetAbout + offsetProjects;
  offSetContact = offSetContact + offSetAbout + offsetProjects;
  offsetMobile = offSetContact;
  Cara = () => (
    <Layout>
      <Parallax pages={5.6 + offsetMobile}>
        <Hero offset={0} />
        <Projects offset={1 + offsetProjects} />
        <About offset={2.7 + offSetAbout } />
        <Contact offset={3.5  + offSetContact } />
      </Parallax>
    </Layout>
  )
}


// If we try to use window during the build process, the build fails.
if (typeof window !== 'undefined') {
      // https://jsfiddle.net/alvaroAV/svvz7tkn/
    /* Create an alert to show if the browser is IE */
    if (navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1) {
        alert('Internet Explorer is not supported, please try an another browser.');
    }

    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    if (windowWidth < 800) {
      projectCollumns = 1;
    }
    // Initial calculateOffset + on resize
    calculateOffset();
    window.addEventListener('resize', function() {
      calculateOffset();
    });
}

export default Cara
