import * as React from 'react';
import { useRef, useContext } from 'react';
import { omit } from 'lodash';

import { notNil, cco } from '../../libraries/fns';
import { cascadeOrElse } from '../../libraries/cascade';
import { useFocus } from '../../libraries/useFocus';
import { useValidators, Validator } from '../../libraries/useValidators';
import { InputClasses, ThemeContext } from '../../context/theme';

import './Select.css';

export interface Option<T> {
  label: string;
  value: T;
  default?: boolean;
  disabled?: boolean;
}

export interface SelectProps<U = string, T = HTMLSelectElement> extends React.SelectHTMLAttributes<T> {
  label: string;
  options: Option<U>[];
  classes?: Partial<InputClasses>;
  validators?: Validator<string>[];
  hint?: string;
  handleInvalid?: (v?: string) => void;
}

/**
 * @render react
 * @name Select
 * @example
 * <Select text="Hello World" />
 */
export const Select: React.SFC<SelectProps> = props => {
  const { label, options, hint, className, handleInvalid } = props;
  const nativeProps = omit(props, ['label', 'options', 'classes', 'validators', 'hint', 'handleInvalid', 'className']);
  const validators = props.validators || [];

  // Setup theme
  const themeContext = useContext(ThemeContext);
  const classes = { ...themeContext.inputClasses, ...props.classes };

  // Focus Input On Label Click
  const inputRef = useRef<any>(null); // Find type for ref
  const onLabelClick = () => inputRef.current.focus();

  // Setup Validators
  const [invalid, handleValidation] = useValidators<string, any>(validators, '');
  if (typeof handleInvalid === 'function') {
    handleInvalid(invalid);
  }

  // Set Theme - Focus > Invalid > Default
  const [focused, focusProps] = useFocus();
  const theme = cascadeOrElse(classes.theme, [focused, classes.focused], [notNil(invalid), classes.invalid]);
  const mergedClassName = `form-select fs-1-1 fd-column-reverse rt-1 ba-0 bb-2 ${theme} ${className}`;

  // Set Message - Invalid > Hint
  const message = cco('\u00A0')(invalid, hint);

  return (
    <section className={mergedClassName}>
      <div>
        <div className="form-select-select ba-0 px-4 pb-3">Test this is a test yes a test let's do it yeah!</div>
      </div>
      <label className="form-select-label fd-row jc-space-between fg-3 rt-1 px-4 pt-2 ma-0" onClick={onLabelClick}>
        <span className="form-select-label-label">{label}</span>
        <span className="form-select-label-message">{message}</span>
      </label>
    </section>
  );
};
export default Select;
