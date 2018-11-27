import { InputEvent } from './react-types';

export const getEventValue = <T = string>(e: InputEvent) => {
  const value: unknown = e.currentTarget.value;
  return value as T;
};

export const eventValueFactory = <T>(fn: (v: T) => void) => (e: InputEvent) => {
  const value = getEventValue<T>(e);
  fn(value);
};
