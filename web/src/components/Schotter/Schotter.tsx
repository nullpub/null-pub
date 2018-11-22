import * as React from 'react'; // This is needed to render jsx with inferno

import './Schotter.css';

import { SchotterCube } from '../SchotterCube';
import { rangeArray } from '../../libraries/array';

export interface SchotterProps {
  rows: number;
  columns: number;
  gap: number;
}

/**
 * @render react
 * @name Schotter
 * @example
 * <Schotter rows=10 columns=6 size=150 gap=10 />
 */
export const Schotter: React.SFC<SchotterProps> = ({ rows, columns, gap }) => {
  const total = columns * rows;
  const style = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: `${gap}px`,
    padding: `calc(100% / ${rows})`
  };

  return (
    <article style={style} className="grid">
      {rangeArray(total).map(i => (
        <SchotterCube key={i} index={i} total={total} rows={rows} />
      ))}
    </article>
  );
};
