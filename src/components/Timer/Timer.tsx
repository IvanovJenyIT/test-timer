import { useState } from 'react';
import { Button, VStack, Text, Box } from '@chakra-ui/react';
import useInterval from '../../hook/useInterval';
import { formatTime } from '../../utils/utils';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useInterval({
    callback: () => {
      if (isActive) {
        setTime((time) => time + 100);
      }
    },
    delay: 100,
  });

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <VStack border={'1px'} borderColor="gray.200" padding={4}>
      <Text fontSize="4xl">{formatTime(time)}</Text>
      <Box display="flex" alignItems="center" gap={2}>
        <Button
          colorScheme={isActive ? 'red' : time > 0 ? 'green' : 'gray'}
          onClick={isActive ? pauseTimer : startTimer}
        >
          Pause / Start
        </Button>
        <Button onClick={resetTimer}>Reset</Button>
      </Box>
    </VStack>
  );
};

export default Timer;
