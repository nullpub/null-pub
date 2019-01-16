import * as React from 'react';
import { useState } from 'react';

import './Tester.css';

export interface TesterProps {
  value: number;
}

/**
 * @render react
 * @name Tester
 * @example
 * <Tester value="Hello World" />
 */
export const Tester: React.SFC<TesterProps> = ({ value }) => {
  const [state, setState] = useState({ outside: value, inside: value });
  if (state.outside !== value) {
    setState({ outside: value, inside: value });
  }

  return (
    <section>
      <p>Value: {state.inside}</p>
      <p>State: {JSON.stringify(state)}</p>
      <button onClick={() => setState(s => ({ ...s, inside: s.inside + 1 }))}>Add</button>
    </section>
  );
};

export default Tester;
