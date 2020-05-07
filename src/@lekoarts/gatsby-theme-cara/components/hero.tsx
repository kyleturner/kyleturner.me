/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "../components/svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  return (
    <div>
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {
          isDark ? (
            <svg width="30pt" height="30pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="m89.582 47.918h-12.5c-1.1484 0-2.082 0.92969-2.082 2.082s0.93359 2.082 2.082 2.082h12.5c1.1523 0 2.0859-0.92969 2.0859-2.082s-0.93359-2.082-2.0859-2.082z" />
                <path d="m70.625 32.324 8.8398-8.8398c0.81641-0.81641 0.81641-2.1367 0-2.9492-0.8125-0.81641-2.1328-0.81641-2.9492 0l-8.8398 8.8398c-0.81641 0.81641-0.81641 2.1367 0 2.9492 0.8125 0.81641 2.1328 0.81641 2.9492 0z" />
                <path d="m70.625 67.676c-0.81641-0.81641-2.1367-0.81641-2.9492 0-0.81641 0.8125-0.81641 2.1328 0 2.9492l8.8398 8.8398c0.81641 0.81641 2.1367 0.81641 2.9492 0 0.81641-0.8125 0.81641-2.1328 0-2.9492z" />
                <path d="m50 25c0.55078 0 1.082-0.21875 1.4727-0.60938s0.60938-0.92188 0.60938-1.4727v-12.5c0-1.1523-0.92969-2.0859-2.082-2.0859s-2.082 0.93359-2.082 2.0859v12.5c0 0.55078 0.21875 1.082 0.60938 1.4727s0.92188 0.60938 1.4727 0.60938z" />
                <path d="m22.918 52.082c0.48047 0 0.94531-0.17188 1.3164-0.48047 0.67969-0.55859 0.9375-1.4805 0.64062-2.3086-0.29297-0.82812-1.0781-1.3789-1.957-1.375h-12.5c-1.1523 0-2.0859 0.92969-2.0859 2.082s0.93359 2.082 2.0859 2.082z" />
                <path d="m50 75c-1.1523 0-2.082 0.93359-2.082 2.082v12.5c0 1.1523 0.92969 2.0859 2.082 2.0859s2.082-0.93359 2.082-2.0859v-12.5c0-0.55078-0.21875-1.082-0.60938-1.4727s-0.92188-0.60938-1.4727-0.60938z" />
                <path d="m31.992 67.41c-0.82422-0.54297-1.918-0.43359-2.6172 0.26562l-8.8398 8.8398c-0.81641 0.81641-0.81641 2.1367 0 2.9492 0.8125 0.81641 2.1328 0.81641 2.9492 0l8.8398-8.8398c0.44531-0.44141 0.66797-1.0625 0.60156-1.6875-0.0625-0.62109-0.40234-1.1836-0.92578-1.5273z" />
                <path d="m20.535 23.484 8.8398 8.8398c0.81641 0.81641 2.1367 0.81641 2.9492 0 0.81641-0.8125 0.81641-2.1328 0-2.9492l-8.8398-8.8398c-0.81641-0.81641-2.1367-0.81641-2.9492 0-0.81641 0.8125-0.81641 2.1328 0 2.9492z" />
                <path d="m70.926 50c0 11.492-9.3164 20.809-20.809 20.809-11.492 0-20.809-9.3164-20.809-20.809s9.3164-20.809 20.809-20.809c11.492 0 20.809 9.3164 20.809 20.809" />
              </g>
            </svg>
          ) :
            (
              <svg width="30pt" height="30pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="m12.812 19.168c6.457-8.4375 15.52-14.793 26.145-17.707 0.51953-0.20703 1.1445-0.20703 1.668 0.10547 1.043 0.51953 1.5625 1.875 1.043 2.918-1.3555 2.918-2.5 6.043-3.125 9.2695-0.73047 3.125-1.043 6.3555-1.043 9.793 0 12.5 5 23.75 13.23 31.875s19.48 13.23 31.875 13.23c2.082 0 4.0625-0.10547 6.043-0.41797 1.9805-0.3125 3.8555-0.625 5.7305-1.1445 0.51953-0.20703 1.1445-0.20703 1.668 0.10547 1.043 0.51953 1.5625 1.7695 1.043 2.918-3.957 8.543-10.418 15.832-18.332 20.832-7.707 4.8945-16.77 7.707-26.562 7.707-13.645 0-26.043-5.5195-35-14.48-8.9648-8.9648-14.488-21.359-14.488-35.004 0-11.25 3.75-21.668 10.105-30z" fill-rule="evenodd" />
              </svg>
            )
        }
      </button>

      <Divider speed={0.2} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="iphone2" width={48} color="icon_blue" left="44%" top="22%" />
          <SVG icon="mac" width={48} color="icon_darkest" left="60%" top="70%" />
          <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
          <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
          <SVG icon="cross" width={16} stroke color="icon_purple" left="22%" top="14%" />
          <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
          <SVG icon="hexa" hiddenMobile width={8} stroke color="icon_orange" left="40%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
        <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
        <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
        <SVG icon="cross" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
        <SVG icon="circle" width={64} color="icon_blue" left="95%" top="5%" />
        <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
        <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_darkest" left="40%" top="20%" />
        <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="45%" />
        <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
      </Divider>
      <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <Intro />
        </Inner>
      </Content>
    </div>)
}

export default Hero