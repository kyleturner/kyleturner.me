/** @jsx jsx */
import {
  jsx,
  Box,
  Button,
  Label,
  Input,
  Textarea,
  Checkbox,
  Text
} from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `100%`, height: `40vh` } }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner >
        {/* Page Content */}
        <ContactMDX />

        {/* Netlify Form */}
        <div sx={{ marginBottom: '70vh' }}>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            netlify-honeypot="bot-field"
          >
            {/* Name */}
            <Label htmlFor='name'>Name</Label>
            <Input type="text" name="name" placeholder="Who are you?" required mb={3} />
            {/* Email */}
            <Label htmlFor='email'>Email</Label>
            <Input
              name="email"
              aria-describedby="email"
              label="Email"
              type="email"
              placeholder="So we can contact you (we won't aadd you to any lists)."
              required
              mb={3}
            />
            {/* Phone */}
            <Label htmlFor='phone'>Phone</Label>
            <Input
              name="phone"
              aria-describedby="phone"
              label="Phone"
              type="text"
              placeholder="Optional but welcomed."
              mb={3}
            />
            {/* Services */}
            <Text sx={{ fontSize: 1, fontWeight: 'bold' }}>What do you need help with?</Text>
            <Box mb={3}>
              <Label>
                <Checkbox name='service-uxui' />Branding & UX/UI Design
            </Label>
              <Label>
                <Checkbox name='service-web' />Web Design & Development
            </Label>
              <Label>
                <Checkbox name='service-app' />App Design & Development
            </Label>
              <Label>
                <Checkbox name='service-consulting' />Software Integration Consulting
            </Label>
            </Box>
            {/* Message */}
            <Label htmlFor='message'>Describe how we can help.</Label>
            <Textarea name="message" required mb={3} />
            {/* Submit */}
            <input type="hidden" name="form-name" value="contact" />
            <Button type='submit' mr={2}>Send</Button>
          </form>
        </div>
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Contact