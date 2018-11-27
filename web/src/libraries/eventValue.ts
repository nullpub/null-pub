import { InputEvent } from './react-types';

export const getEventValue = (e: InputEvent) => {
  const value = e.currentTarget.value;
  return value;
};

export const eventValueFactory = (fn: (v: string) => void) => (e: InputEvent) => {
  const value = getEventValue(e);
  fn(value);
};
