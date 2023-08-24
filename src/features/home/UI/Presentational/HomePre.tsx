import { FC } from "react";
import { Layout } from "../../../../application/UI/Components/layout";
import { NotSupportedMessage } from "../Components/NotSupportedMessage";

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
                        <NotSupportedMessage />
                }
            </Layout>
        </>
    )
}