import { Link, Text } from '@chakra-ui/react';
import type { FC } from 'react';

interface ViewListProps {
    item: NDEFRecord
}

export const ViewList: FC<ViewListProps> = ({ item }) => {
  if (item.recordType === 'text') {
    const textDecoder = new TextDecoder(item.encoding);
    const text = textDecoder.decode(item.data);
    return <Text>{`Text: ${text}`}</Text>;
  } else if (item.recordType === 'url') {
    const textDecoder = new TextDecoder();
    const text = textDecoder.decode(item.data);
    return <Text>URL: <Link isExternal overflowWrap='anywhere' href={text} color='teal.500'>{text}</Link></Text>;
  } else if (item.mediaType === 'application/json' && item.recordType === 'mime') {
    const textDecoder = new TextDecoder();
    const text = textDecoder.decode(item.data);
    return <Text>JSON: {text}</Text>;
  } else {
    return <Text>変換不可</Text>;
  }
};