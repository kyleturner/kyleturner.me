/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"

const Footer = () => {
    return (
        <Box as="footer" variant="footer">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            <br />
            <Flex
                sx={{
                    justifyContent: `center`,
                    alignItems: `center`,
                    mt: 3,
                    mb: 3,
                    color: `text`,
                    fontWeight: `semibold`,
                    a: { color: `text` },
                }}
            >
                <img width="30" height="30" src="profile-circle-hd.png" alt="Kyle" />
                <div sx={{ mx: 2 }}>Development by</div>
                <Link aria-label="Kyle Turner" href="https://kyleturner.me">Kyle Turner</Link>
            </Flex>
        </Box>
    )
}

export default Footer