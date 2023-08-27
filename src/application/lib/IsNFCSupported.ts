/**
 * 対応しているかの確認
 * @returns 
 */
export const isNFCSupported = () => {
  if ('NDEFReader' in window) {
    // NFC読み取り機能がサポートされている（Chromeの場合）
    return true;
  } else {
    // NFC読み取り機能がサポートされていない
    return false;
  }
};
