export const useTiming = (name: string) => {
  const startName = `${name}Start`;
  const endName = `${name}End`;
  const measureName = `${name}Measure`;
  return {
    start: () => window.performance.mark(startName),
    end: () => window.performance.mark(endName),
    measure: () => window.performance.measure(measureName, startName, endName),
  };
};
