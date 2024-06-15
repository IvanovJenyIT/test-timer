import { useState } from 'react';
import { Button, VStack, Text, Box } from '@chakra-ui/react';
import useInterval from '../../hook/useInterval';

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

  const formatTime = () => {
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMilliseconds = `0${Math.floor(time % 1000)}`.slice(-3);

    return `${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return (
    <VStack border={'1px'} borderColor="gray.200" padding={4}>
      <Text fontSize="4xl">{formatTime()}</Text>
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
