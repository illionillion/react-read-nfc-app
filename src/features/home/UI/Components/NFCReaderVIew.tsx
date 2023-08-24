import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IsSupportedMessageStyle } from "../Presentational/HomePre.css";
import { IconContext } from "react-icons";
import { FcNfcSign } from "react-icons/fc";

interface NFCReaderViewProps {
    isRead: boolean
}

export const NFCReaderView: FC<NFCReaderViewProps> = ({ isRead }) => {
    return <>
        {
            isRead ?
            <></> :
            <Box css={IsSupportedMessageStyle}>
                <IconContext.Provider value={{ size: '3rem' }}>
                    <FcNfcSign />
                </IconContext.Provider>
                <Text>NFCを近づけてください。</Text>
            </Box>
        }
    </>
}