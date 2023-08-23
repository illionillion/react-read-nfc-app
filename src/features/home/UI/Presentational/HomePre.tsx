import { FC } from "react";
import { Layout } from "../../../../application/UI/Components/layout";

interface HomePreProps {
    isSupported: boolean
}

export const HomePre: FC<HomePreProps> = ({isSupported}) => {
    return <><Layout>{isSupported ? "" : "お使いの端末はWebNFCはサポートされていません。"}</Layout></>
}