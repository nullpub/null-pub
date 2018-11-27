import * as React from 'react';
import { useRef, useContext } from 'react';
import { omit } from 'lodash';

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
  const nativeProps = omit(props, ['label', 'classes', 'validators', 'hint', 'invalid', 'className']);
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
  const mergedClassName = `form-input fs-1-1 fd-column-reverse rt-1 ba-0 bb-2 ${theme} ${className}`;

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
        {...nativeProps}
      />
      <label className="form-input-label fd-row jc-space-between fg-3 rt-1 px-4 pt-2 ma-0" onClick={onLabelClick}>
        <span className="form-input-label-label">{label}</span>
        <span className="form-input-label-message">{message}</span>
      </label>
    </section>
  );
};

export default Input;
