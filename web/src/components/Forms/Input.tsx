import * as React from 'react';
import { omit } from 'lodash';

import { notNil } from '../../libraries/fns';

import './Input.css';

export interface InputProps<T = any> extends React.InputHTMLAttributes<T> {
  label: string;
  hint?: string;
  error?: string;
}

/**
 * @render react
 * @name Input
 * @example
 * <Input />
 */
export const Input: React.SFC<InputProps> = props => {
  const { label, hint, className } = props;
  const nativeProps = omit(props, ['label', 'hint', 'error', 'className']);
  const mergedClassName = `form-input fd-column-reverse tc-light rt-1 ${className}`;

  return (
    <section className={mergedClassName}>
      <input className="form-input-input ba-0 bb-2 px-4 pb-3" {...nativeProps} />
      <label className="form-input-label rt-1 ma-0 px-4 py-2 fd-row jc-space-between">
        <span>{label}</span>
        <span>{notNil(hint) && hint}</span>
      </label>
    </section>
  );
};
