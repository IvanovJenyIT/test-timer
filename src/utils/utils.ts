export const formatTime = (time: number) => {
  const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
  const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
  const getMilliseconds = `0${Math.floor(time % 1000)}`.slice(-3);

  return `${getMinutes}:${getSeconds}.${getMilliseconds}`;
};
