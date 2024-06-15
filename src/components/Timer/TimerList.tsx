import { useState } from 'react';
import { Button, HStack, VStack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import Timer from './Timer';

const TimerList = () => {
  const [timerIds, setTimerIds] = useState<string[]>([]);

  const addTimer = () => {
    const id = uuidv4();
    setTimerIds((ids) => [...ids, id]);
  };

  const removeTimer = () => {
    setTimerIds((ids) => {
      if (ids.length > 0) {
        return ids.slice(0, -1);
      }
      return ids;
    });
  };

  return (
    <VStack flexWrap={'wrap'} width={window.innerWidth}>
      <HStack padding={4}>
        <Button onClick={addTimer}>Add</Button>
        <Button onClick={removeTimer}>Remove</Button>
      </HStack>

      <HStack spacing="24px" flexWrap="wrap">
        {timerIds.map((id) => (
          <Timer key={id} />
        ))}
      </HStack>
    </VStack>
  );
};

export default TimerList;
