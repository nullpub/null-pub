import * as React from 'react'; // This is needed to render jsx with inferno
import { useState } from 'react';

import './HomePage.css';
import { Schotter } from '../../components/Schotter';
import { InputEvent } from '../../libraries/react-types';

export interface HomePageProps {
  title: string;
}

// Helper functions
const getValue = (e: InputEvent<any>) => e.currentTarget.value;

export const useRange = (initialValue: number) => {
  const type = 'range';
  const [value, setState] = useState(initialValue);
  const onChange = (e: InputEvent<any>) => {
    const next = parseInt(getValue(e));
    setState(next);
  };
  return { type, value, onChange };
};

/**
 * @render react
 * @name HomePage
 * @example
 * <HomePage text="Hello World" />
 */
export const HomePage: React.SFC<HomePageProps> = () => {
  const schotterProps = {
    columns: 12,
    rows: 12,
    gap: 0,
    schotter: true,
  };

  return (
    <section className="page-home">
      <Schotter {...schotterProps} />
    </section>
  );
};

export default HomePage;
