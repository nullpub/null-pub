import { useEffect } from 'react';

export const useTiming = (name: string) => {
  const startName = `${name}Start`;
  const endName = `${name}End`;
  const measureName = `${name}Measure`;
  useEffect(() => {
    window.performance.mark(startName);
    return () => {
      window.performance.mark(endName);
      window.performance.measure(measureName, startName, endName);
    };
  });
};
