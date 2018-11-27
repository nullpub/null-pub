import { createContext } from 'react';

export interface InputClasses {
  theme: string;
  focused: string;
  invalid: string;
}

export interface ThemeContext {
  inputClasses: InputClasses;
}

/**
 * Default Context
 */
const defaultThemeContext: ThemeContext = {
  inputClasses: {
    theme: 'tc-light',
    focused: 'tc-accent',
    invalid: 'tc-warning',
  },
};

export const ThemeContext = createContext(defaultThemeContext);
