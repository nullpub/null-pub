import { useState } from 'react';

import { eventValueFactory } from './eventValue';
import { lco, notNil } from './fns';
import { InputEvent } from './react-types';

export type Validator<T> = ((v: T) => string | undefined);

export const useValidators = <T>(validators: Validator<T>[] = [], init?: T) => {
  const initialValue = notNil(init) ? lco(init, validators) : undefined;
  const [invalid, setInvalid] = useState(initialValue);
  const handleValidation = eventValueFactory<T>(v => {
    const invalidReason = lco(v, validators);
    if (notNil(invalidReason)) {
      return setInvalid(invalidReason);
    }
    setInvalid(undefined);
  });
  return [invalid, handleValidation] as [string | undefined, (e: InputEvent) => void];
};
