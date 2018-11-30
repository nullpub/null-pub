import { createContext } from 'react';

export interface InputClasses {
  theme: string;
  focused: string;
  invalid: string;
  disabled: string;
}

export interface ThemeContext {
  inputClasses: InputClasses;
}

/**
 * Default Context
 */
const defaultThemeContext: ThemeContext = {
  inputClasses: {
    theme: 'ct-light',
    focused: 'ct-accent',
    invalid: 'ct-warning',
    disabled: 'ct-dark',
  },
};

export const ThemeContext = createContext(defaultThemeContext);
