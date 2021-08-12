/** @jsx jsx */
import { Styled, Box, Flex, Link, useColorMode, jsx } from "theme-ui"

let intitialColorModeSet = false;
const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  let isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  // Detect the preferred color mode.
  if (typeof window !== 'undefined' && !intitialColorModeSet) {
        // Detect preferred mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          setColorMode(`light`);
        }
        /* // We use dark mode by default
        else {
          //setColorMode(`dark`);
        }*/
        intitialColorModeSet = true;
  }

  return (
    <Box as="footer" variant="footer" className="bottom-footer" sx={{ color: 'text_bright', paddingTop: '60px', zInex: 9999999999, width: '100vmin' }} >
      <button
        className={isDark ? 'btn-toggle-light' : 'btn-toggle-dark'}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? <span sx= { { fontStyle: 'oblique', color: 'text_bright', marginTop: '3px'} }><img className="dark-mode-icon" src="lightbult.svg" alt="" /> Light</span> : 
        <span sx= { { fontStyle: 'oblique', color: 'text', marginTop: '3px'} }> <img className="light-mode-icon" src="lightbult.svg" alt="" /> Dark</span> }
      </button>
      <br />
      <span tabIndex={0} className="copy-text"> &copy; Olli Suutari</span>
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `heading_bright`,
          fontWeight: `semibold`,
          a: { color: `heading_bright` },
        }}
      >
        {` `}
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          target="_blank" href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-cara"
        >
        Template
        </Styled.a>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Styled.a aria-label="Link to the theme author's website" target="_blank" href="https://www.lekoarts.de/en">
          LekoArts
        </Styled.a>
      </Flex>
    </Box>
  )
}

export default Footer