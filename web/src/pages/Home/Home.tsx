import * as React from 'react'; // This is needed to render jsx with inferno
import { useState } from 'react';

import './Home.css';
import { Schotter } from '../../components/Schotter';
import { InputEvent } from '../../libraries/react-types';

export interface HomeProps {
  title: string;
}

// Helper functions
const getValue = (e: InputEvent) => e.currentTarget.value;

export const useRange = (initialValue: number) => {
  const type = 'range';
  const [value, setState] = useState(initialValue);
  const onChange = (e: InputEvent) => {
    const next = parseInt(getValue(e));
    setState(next);
  };
  return { type, value, onChange };
};

/**
 * @render react
 * @name Home
 * @example
 * <Home text="Hello World" />
 */
export const Home: React.SFC<HomeProps> = () => {
  const [schotter, setSchotter] = useState(true);
  const schotterProps = {
    columns: 12,
    rows: 22,
    gap: 1,
    schotter,
  };
  const toggleSchotter = () => setSchotter(s => !s);

  return (
    <section className="page-home pa-7 ma-7">
      <header className="home-header fd-column fg-4 pa-7 ma-7">
        <button className={schotter ? 'thm-secondary' : 'thm-primary'} onClick={toggleSchotter}>
          Schotter
        </button>
      </header>
      <Schotter {...schotterProps} />
    </section>
  );
};
