import './App.css'

import '@mantine/core/styles.css'
import TextInput from './components/TextInput';
import { useState } from 'react';
import { NativeSelect } from '@mantine/core';
import { Button } from '@mantine/core';
import {IconDownload,  } from '@tabler/icons-react';


import { SimpleGrid } from '@mantine/core';
function App() {
  const [value, setValue] = useState('');

  return (
    <>
  <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
      <div>
        <TextInput/>
      </div>

      <div>
        <NativeSelect
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
          data={['New Student', 'Transferee']}
        />
      </div>

      <div>
        <Button 
          rightSection={<IconDownload size={20} />} 
          variant="filled"
          color="rgba(255, 170, 0, 1)" 
        >
          export
        </Button>
      </div>
    
    </SimpleGrid>

    </>
  );
}

export default App;