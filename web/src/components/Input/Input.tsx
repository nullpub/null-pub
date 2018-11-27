import * as React from 'react';
import { useRef, useContext } from 'react';

import { notNil, cco } from '../../libraries/fns';
import { cascadeOrElse } from '../../libraries/cascade';
import { useFocus } from '../../libraries/useFocus';
import { useValidators, Validator } from '../../libraries/useValidators';
import { InputClasses, ThemeContext } from '../../context/theme';

import './Input.css';

interface InputProps<T = any> extends React.InputHTMLAttributes<T> {
  label: string;
  classes?: Partial<InputClasses>;
  validators?: Validator<string>[];
  hint?: string;
  invalid?: (v: string) => void;
}

/**
 * @render react
 * @name Input
 * @example
 * <Input />
 */
const Input: React.SFC<InputProps> = props => {
  const { label, hint, className } = props;
  const validators = props.validators || [];

  const themeContext = useContext(ThemeContext);
  const classes = { ...themeContext.inputClasses, ...props.classes };

  // Focus Input On Label Click
  const inputRef = useRef<any>(null); // Find type for ref
  const onLabelClick = () => inputRef.current.focus();

  // Setup Validators
  const [invalid, handleValidation] = useValidators(validators);

  // Set Theme - Focus > Invalid > Default
  const [focused, focusProps] = useFocus();
  const theme = cascadeOrElse(classes.theme, [focused, classes.focused], [notNil(invalid), classes.invalid]);
  const mergedClassName = `form-input fd-column-reverse rt-1 ba-0 bb-2 ${theme} ${className}`;

  // Set Message - Invalid > Hint
  const message = cco('\u00A0')(invalid, hint);

  return (
    <section className={mergedClassName}>
      <input
        className="form-input-input ba-0 px-4 pb-3"
        ref={inputRef}
        size={1}
        onChange={handleValidation}
        {...focusProps}
        {...props}
      />
      <label className="form-input-label fd-row jc-space-between rt-1 ma-0 px-4 py-2" onClick={onLabelClick}>
        <span className="fs-0-0 fb-min-content">{label}</span>
        <span className="fs-0-0 fb-min-content">{message}</span>
      </label>
    </section>
  );
};

export default Input;
