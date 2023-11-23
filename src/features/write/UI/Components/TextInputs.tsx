import { Box, Input, Text, Textarea } from '@chakra-ui/react';
import type { ChangeEvent, FC } from 'react';

interface TextInputProps {
    data: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextInput: FC<TextInputProps> = ({ data, onChange }) => {
  return <Box w='full'>
    <Text as='label' htmlFor='InputText'>テキストを入力</Text>
    <Textarea id='InputText' value={data} onChange={onChange} />
  </Box>;
};

interface LinkInputProps {
    url: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LinkInput: FC<LinkInputProps> = ({ url, onChange }) => {
  return <Box w='full'>
    <Text as='label' htmlFor='InputText'>リンクを入力</Text>
    <Input id='InputText' value={url} type='url' onChange={onChange} />
  </Box>;
};

interface JsonInputProps {
    json: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const JsonInput: FC<JsonInputProps> = ({json, onChange}) => {
  return <Box w='full'>
    <Text as='label' htmlFor='InputText'>JSONを入力</Text>
    <Textarea id='InputText' value={json} onChange={onChange} />
  </Box>;
};