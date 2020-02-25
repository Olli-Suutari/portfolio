/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, useColorMode, jsx } from "theme-ui"

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
    <ThemeFooter>
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `bold`, display: `block`, mx: `auto`, padding: '1em 2.5em', borderRadius: '14px', fontSize: '1.07em', mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      <br />
      <span className="copy-text"> &copy; Olli Suutari</span>
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
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
    </ThemeFooter>
  )
}

export default Footer