import * as React from 'react';

import { rangeArray } from '../../libraries/array';
import { useTiming } from '../../libraries/useTiming';

import './Schotter.css';
import { SchotterCube } from './SchotterCube';
import { Link } from './interfaces';

export interface SchotterProps {
  rows: number;
  columns: number;
  gap: number;
  links?: Link[];
}

/**
 * @render react
 * @name Schotter
 * @example
 * <Schotter rows=22 columns=12 gap=0 />
 */
export const Schotter: React.SFC<SchotterProps> = ({ rows, columns, gap }) => {
  useTiming('RenderSchotter');
  const total = columns * rows;
  const style = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: `${gap}px`,
  };

  return (
    <article style={style} className="schotter-grid">
      {rangeArray(total).map(i => (
        <SchotterCube key={i} index={i} total={total} />
      ))}
    </article>
  );
};
