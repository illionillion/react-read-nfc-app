import { FC } from "react";
import { headerIconText, headerStyle } from "./HeaderItemPre.css";
import { Box, Heading, } from "@chakra-ui/react";

export const HeaderItemPre:FC = () => {
    return (
        <Box as="header" css={headerStyle}>
            <Heading css={headerIconText}>NFC読み取り</Heading>
        </Box>
    )
}