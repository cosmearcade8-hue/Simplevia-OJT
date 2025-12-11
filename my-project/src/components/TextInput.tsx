import { TextInput as MantineTextInput, } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
function TextInput() {
  return (
    <MantineTextInput
      placeholder='Enter placeholder'
      classNames={{ label: 'font-normal' }}
      leftSection={<IconSearch size={20}/>}
    />
  );
}

export default TextInput;
