import * as React from 'react'; // This is needed to render jsx with inferno
import { useState } from 'react';
import { debounce } from 'lodash';

import './Home.css';
import { Schotter } from '../../components/Schotter';
import { InputEvent } from '../../libraries/react-types';

export interface HomeProps {
  title: string;
}

// Helper functions
const getValue = (e: InputEvent) => e.currentTarget.value;

const useRange = (initialValue: number) => {
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
export const Home: React.SFC<HomeProps> = ({ title }) => {
  const columnRange = useRange(12);
  const rowRange = useRange(22);
  const gapRange = useRange(0);
  const schotter = {
    columns: columnRange.value,
    rows: rowRange.value,
    gap: gapRange.value,
  };
  const shared = {
    className: 'pa-3',
    min: '0',
    max: '40',
  };

  return (
    <section className="page-home">
      <header className="home-header pl-7 fd-row fg-6">
        <h1 className="pa-5">{title}</h1>
        <label htmlFor="column">Columns</label>
        <input name="column" {...shared} {...columnRange} />
        <label htmlFor="row">Rows</label>
        <input name="row" {...shared} {...rowRange} />
        <label htmlFor="gap">Gap</label>
        <input name="gap" {...shared} {...gapRange} />
      </header>
      <Schotter {...schotter} />
    </section>
  );
};
