import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import { IsSupportedMessageStyle } from '../Presentational/HomePre.css';
import { IconContext } from 'react-icons';
import { MdSystemSecurityUpdateWarning } from 'react-icons/md';

export const NotSupportedMessage: FC = () => {
  return <Box css={IsSupportedMessageStyle}>
    <IconContext.Provider value={{ size: '3rem' }}>
      <MdSystemSecurityUpdateWarning />
    </IconContext.Provider>
    <Text>お使いの端末では対応しておりません。</Text>
  </Box>;

};