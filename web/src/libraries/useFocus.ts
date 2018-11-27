import { useState } from 'react';

interface UseFocusProps {
  onFocus: () => void;
  onBlur: () => void;
}

export const useFocus = (init: boolean = false) => {
  const [focused, setFocus] = useState(init);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  return [focused, { onFocus, onBlur }] as [boolean, UseFocusProps];
};
