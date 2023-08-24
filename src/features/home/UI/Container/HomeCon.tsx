import { FC, useEffect, useState } from "react";
import { HomePre } from "../Presentational/HomePre";

export const HomeCon: FC = () => {

    const [isSupported, setIsSupported] = useState<boolean>(false)
    const [isRead, setIsRead] = useState<boolean>(false)

    // 対応しているかの確認
    const isNFCSupported = () => {
        if ("NDEFReader" in window) {
            // NFC読み取り機能がサポートされている（Chromeの場合）
            return true;
        } else {
            // NFC読み取り機能がサポートされていない
            return false;
        }
    }

    let ignore = false
    useEffect(() => {

        if (!ignore) {
            if (isNFCSupported()) {
                // alert("このブラウザはNFC読み取り機能をサポートしています。");
                const reader = new NDEFReader();
                setIsSupported(true)
            } else {
                // alert("このブラウザはNFC読み取り機能をサポートしていません。");
            }
        }

        return () => {
            ignore = true
        }
    }, [])


    return <HomePre {...{ isSupported, isRead }} />
}