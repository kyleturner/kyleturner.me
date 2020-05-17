/** @jsx jsx */
import { Box, Container, Card, Flex, Link, jsx } from "theme-ui"

import CopycatMDX from "../content/copycat"

const Copycat = () => {
  return (
    <Container
      sx={{
        color: `text`,
        fontWeight: `semibold`,
        a: { color: `text` },
      }}
    >

      <h1>Copycat</h1>
      <CopycatMDX />
    </Container>
  )
}

export default Copycat