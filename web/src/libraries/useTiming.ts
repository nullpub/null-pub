import { useEffect } from 'react';

export const useTiming = (name: string) => {
  const startName = `${name}Start`;
  const endName = `${name}End`;
  window.performance.mark(startName);
  useEffect(() => {
    window.performance.mark(endName);
    window.performance.measure(`${name}Measure`, startName, endName);
  });
};
