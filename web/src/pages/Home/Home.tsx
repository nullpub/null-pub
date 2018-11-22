import * as React from 'react'; // This is needed to render jsx with inferno
import { useState } from 'react';

import './Home.css';
import { Schotter } from '../../components/Schotter';
import { InputEvent } from '../../libraries/react-types';

export interface HomeProps {
  title: string;
}

const getValue = (e: InputEvent) => e.currentTarget.value;

/**
 * @render react
 * @name Home
 * @example
 * <Home text="Hello World" />
 */
export const Home: React.SFC<HomeProps> = ({ title }) => {
  const [schotter, setSchotter] = useState({ rows: 22, columns: 12, gap: 0 });
  const handleRow = (e: InputEvent) => {
    const rows = parseInt(getValue(e));
    setSchotter(s => ({ ...s, rows }));
  };
  const handleColumn = (e: InputEvent) => {
    const columns = parseInt(getValue(e));
    setSchotter(s => ({ ...s, columns }));
  };

  return (
    <section>
      <header className="home-header">
        <h1 className="pa-5">{title}</h1>
        <input
          className="pa-3"
          type="range"
          value={schotter.rows}
          min="6"
          max="24"
          onChange={handleRow}
        />
        <input
          className="pa-3"
          type="range"
          min="12"
          max="32"
          value={schotter.columns}
          onChange={handleColumn}
        />
      </header>
      <Schotter {...schotter} />
    </section>
  );
};
