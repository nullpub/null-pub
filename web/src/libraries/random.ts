export const randomIntInRange = (min: number, max: number) => {
  const range = [min, max].sort();
  return Math.floor(Math.random() * (range[1] - range[0]) + range[0]);
};

export const randomInRange = (min: number, max: number) => {
  const range = [min, max].sort();
  return Math.random() * (range[1] - range[0]) + range[0];
};
