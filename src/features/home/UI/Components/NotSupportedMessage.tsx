import { Box, Container, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ContainerStyle, NotSupportedMessageStyle } from "../Presentational/HomePre.css";
import { IconContext } from "react-icons";
import { MdSystemSecurityUpdateWarning } from "react-icons/md";

export const NotSupportedMessage: FC = () => {
    return <Container css={ContainerStyle}>
        <Box css={NotSupportedMessageStyle}>
            <IconContext.Provider value={{ size: '3rem' }}>
                <MdSystemSecurityUpdateWarning />
            </IconContext.Provider>
            <Text>お使いの端末では対応しておりません。</Text>
        </Box>
    </Container>
}