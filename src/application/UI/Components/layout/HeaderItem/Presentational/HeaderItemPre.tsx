import { Button, Flex, Heading, } from '@chakra-ui/react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { headerIconText, headerStyle } from './HeaderItemPre.css';

interface HeaderItemPreProps {
    pathname: string
}
export const HeaderItemPre: FC<HeaderItemPreProps> = ({pathname}) => {
  return (
    <Flex direction='column' as='header' css={headerStyle}>
      <Heading css={headerIconText} as={Link} to="/">NFC読み取りWebアプリ</Heading>
      <Flex w='full' justify='center' gap={1}>
        <Button flex={1} as={Link} to="/read" colorScheme={pathname === '/' || pathname === '/read' ? 'teal' : undefined }>読み取りモード</Button>
        <Button flex={1} as={Link} to="/write" colorScheme={pathname === '/write' ? 'teal' : undefined }>書き込みモード</Button>
      </Flex>
    </Flex>
  );
};