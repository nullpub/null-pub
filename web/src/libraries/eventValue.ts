import { SyntheticEvent } from 'react';

export const getEventValue = <U, T extends { value: U } = { value: U }>(e: SyntheticEvent<T>) => {
  const value = e.currentTarget.value;
  return value;
};

export const eventValueFactory = <U, T extends { value: U } = { value: U }>(fn: (v: U) => void) => (
  e: SyntheticEvent<T>
) => {
  const value = getEventValue<U, T>(e);
  fn(value);
};
