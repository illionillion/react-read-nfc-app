import { FC } from "react";
import { Layout } from "../../../../application/UI/Components/layout";
import { NotSupportedMessage } from "../Components/NotSupportedMessage";
import { Container } from "@chakra-ui/react";
import { ContainerStyle } from "./HomePre.css";
import { NFCReaderView } from "../Components/NFCReaderVIew";

interface HomePreProps {
    isSupported: boolean
    isRead: boolean
}

export const HomePre: FC<HomePreProps> = ({ isSupported, isRead }) => {
    return (
        <>
            <Layout>
                <Container css={ContainerStyle}>
                    {
                        isSupported ?
                            <NFCReaderView {...{ isRead }} />
                            :
                            <NotSupportedMessage />
                    }
                </Container>
            </Layout>
        </>
    )
}