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
export const SchotterCube: React.SFC<SchotterCubeProps> = ({ index, total, rows }) => {
  const drift = index / total;
  const range = drift * drift * drift * 50;
  const tx =
    mod(index, rows) === 0
      ? randomIntInRange(0, range)
      : mod(index + 1, rows) === 0
      ? randomIntInRange(0, -1 * range)
      : randomIntInRange((-1 * range) / 2, range / 2);
  const ty = randomIntInRange((-1 * range) / 2, range / 2);
  const tr = randomIntInRange(drift * -90, drift * 90);
  const style = {
    transform: `translate(${tx}%, ${ty}%) rotate(${tr}deg)`,
  };

  return <section style={style} className={`ba-1 bs-dotted `} />;
};
