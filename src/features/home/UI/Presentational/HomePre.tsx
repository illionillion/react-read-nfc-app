import { FC } from "react";
import { Layout } from "../../../../application/UI/Components/layout";
import { Box, Container, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ContainerStyle, NotSupportedMessage } from "./HomePre.css";

interface HomePreProps {
    isSupported: boolean
}

export const HomePre: FC<HomePreProps> = ({ isSupported }) => {
    return (
        <>
            <Layout>
                {
                    isSupported ?
                        ""
                        :
                        <Container css={ContainerStyle}>
                            <Box css={NotSupportedMessage}>
                                <InfoOutlineIcon boxSize={7} />
                                <Text>お使いの端末では対応しておりません。</Text>
                            </Box>
                        </Container>
                }
            </Layout>
        </>
    )
}