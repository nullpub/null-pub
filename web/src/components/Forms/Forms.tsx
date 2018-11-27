import * as React from 'react';

import './Forms.css';

export interface FormsProps {
  text: string;
}

/**
 * @render react
 * @name Forms
 * @example
 * <Forms text="Hello World" />
 */
export const Forms: React.SFC<FormsProps> = ({ text }) => (
  <span>{text}</span>
);
