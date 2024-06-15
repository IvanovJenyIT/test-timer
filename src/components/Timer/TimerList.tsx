import { useState } from 'react';
import { Button, HStack, VStack } from '@chakra-ui/react';
import Timer from './Timer';

const TimerList = () => {
  const [timers, setTimers] = useState<JSX.Element[]>([]);

  const addTimer = () => {
    setTimers([...timers, <Timer key={timers.length} />]);
  };

  const removeTimer = () => {
    if (timers.length > 0) {
      setTimers(timers.slice(0, -1));
    }
  };

  return (
    <VStack flexWrap={'wrap'} width={window.innerWidth}>
      <HStack padding={4}>
        <Button onClick={addTimer}>Add</Button>
        <Button onClick={removeTimer}>Remove</Button>
      </HStack>

      <HStack spacing="24px" flexWrap="wrap">
        {timers}
      </HStack>
    </VStack>
  );
};

export default TimerList;
