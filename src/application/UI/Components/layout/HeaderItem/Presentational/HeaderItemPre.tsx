import { Button, Flex, Heading, } from '@chakra-ui/react';
import type { FC } from 'react';
import { headerIconText, headerStyle } from './HeaderItemPre.css';

interface HeaderItemPreProps {
    pathname: string
    checkHref: (href: string) => string
}
export const HeaderItemPre: FC<HeaderItemPreProps> = ({pathname, checkHref}) => {
  return (
    <Flex direction='column' as='header' css={headerStyle}>
      <Heading css={headerIconText} as="a" href={checkHref('/')}>NFC読み取りWebアプリ</Heading>
      <Flex w='full' justify='center' gap={1}>
        <Button flex={1} as='a' href={checkHref('/read')} colorScheme={pathname === '/' || pathname === '/read' ? 'teal' : undefined }>読み取りモード</Button>
        <Button flex={1} as='a' href={checkHref('/write')} colorScheme={pathname === '/write' ? 'teal' : undefined }>書き込みモード</Button>
      </Flex>
    </Flex>
  );
};