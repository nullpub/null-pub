import { useState } from 'react';
import { SyntheticEvent } from 'react';

import { eventValueFactory } from './eventValue';
import { lco, notNil } from './fns';

export type Validator<T> = ((v: T) => string | undefined);

export const useValidators = <T, U extends { value: T } = { value: T }>(validators: Validator<T>[] = [], init?: T) => {
  const initialValue = notNil(init) ? lco(init, validators) : undefined;
  const [invalid, setInvalid] = useState(initialValue);
  const handleValidation = eventValueFactory<T, U>(v => {
    const invalidReason = lco(v, validators);
    if (notNil(invalidReason)) {
      return setInvalid(invalidReason);
    }
    setInvalid(undefined);
  });
  return [invalid, handleValidation] as [string | undefined, (e: SyntheticEvent<U>) => void];
};
