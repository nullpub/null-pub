import * as React from 'react';
import { useRef, useContext } from 'react';
import { omit } from 'lodash';

import { notNil, cco } from '../../libraries/fns';
import { cascadeOrElse } from '../../libraries/cascade';
import { useFocus } from '../../libraries/useFocus';
import { useValidators, Validator } from '../../libraries/useValidators';
import { InputClasses, ThemeContext } from '../../context/theme';
import { useTiming } from '../../libraries/useTiming';

import './Input.css';

interface InputProps<T = any> extends React.InputHTMLAttributes<T> {
  label: string;
  classes?: Partial<InputClasses>;
  validators?: Validator<string>[];
  hint?: string;
  handleInvalid?: (v?: string) => void;
}

/**
 * @render react
 * @name Input
 * @example
 * <Input />
 */
const Input: React.SFC<InputProps> = props => {
  const { start, end, measure } = useTiming('input');
  start();

  const { label, hint, className, handleInvalid } = props;
  const nativeProps = omit(props, ['label', 'classes', 'validators', 'hint', 'handleInvalid', 'className']);
  const validators = props.validators || [];

  // Setup theme
  const themeContext = useContext(ThemeContext);
  const classes = { ...themeContext.inputClasses, ...props.classes };

  // Focus Input On Label Click
  const inputRef = useRef<any>(null); // Find type for ref
  const onLabelClick = () => inputRef.current.focus();

  // Setup Validators
  const [invalid, handleValidation] = useValidators(validators, '');
  if (typeof handleInvalid === 'function') {
    handleInvalid(invalid);
  }

  // Set Theme - Focus > Invalid > Default
  const [focused, focusProps] = useFocus();
  const theme = cascadeOrElse(classes.theme, [focused, classes.focused], [notNil(invalid), classes.invalid]);
  const mergedClassName = `form-input fls-1-1 fld-column-reverse brt-1 ba-0 bb-2 ${theme} ${className}`;

  // Set Message - Invalid > Hint
  const message = cco('\u00A0')(invalid, hint);
  end();
  measure();

  return (
    <section className={mergedClassName}>
      <input
        className="form-input-input ba-0 bra-0 pa-0 px-4 pb-3"
        ref={inputRef}
        size={1}
        onChange={handleValidation}
        {...focusProps}
        {...nativeProps}
      />
      <label
        className="form-input-label fld-row jc-space-between flg-3 brt-1 fsd-3 px-4 pt-2 ma-0"
        onClick={onLabelClick}
      >
        <span className="form-input-label-label">{label}</span>
        <span className="form-input-label-message">{message}</span>
      </label>
    </section>
  );
};

export default Input;
