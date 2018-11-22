import * as React from 'react'; // This is needed to render jsx with inferno

import './SchotterCube.css';

import { randomIntInRange } from '../../libraries/random';
import { mod } from '../../libraries/math';

export interface SchotterCubeProps {
  index: number;
  total: number;
  rows: number;
}

/**
 * @render react
 * @name SchotterCube
 * @example
 * <SchotterCube text="Hello World" />
 */
export const SchotterCube: React.SFC<SchotterCubeProps> = ({
  index,
  total,
  rows
}) => {
  const drift = index / total;
  const range = drift * drift * drift * 50;
  const middle = Math.floor(rows / 2);
  const direction = mod(index, rows) <= middle ? -1 : 1;
  const rand = [
    randomIntInRange(0, direction * range),
    randomIntInRange(0, direction * range),
    randomIntInRange(drift * -90, drift * 90)
  ];
  const style = {
    transform: `translate(${rand[0]}%, ${rand[1]}%) rotate(${rand[2]}deg)`
  };

  return <section style={style} className={`ba-1 bs-dotted `} />;
};
