import * as React from 'react'; // This is needed to render jsx with inferno
import { useMemo } from 'react';

import './SchotterCube.css';

import { randomIntInRange } from '../../libraries/random';
import { mod } from '../../libraries/math';

export interface SchotterCubeProps {
  index: number;
  total: number;
  rows: number;
  schotter: boolean;
}

const computeTransforms = (index: number, rows: number, drift: number, range: number) => {
  let tx: number = 0;
  const ty = randomIntInRange((-1 * range) / 2, range / 2);
  const tr = randomIntInRange(drift * -90, drift * 90);
  if (mod(index, rows) === 0) {
    // Cube on left edge
    tx = randomIntInRange(0, range);
  } else if (mod(index + 1, rows) === 0) {
    // Cube on right edge
    tx = randomIntInRange(0, -1 * range);
  } else {
    tx = randomIntInRange((-1 * range) / 2, range / 2); // Cube in the middle
  }
  return { tx, ty, tr };
};

/**
 * @render react
 * @name SchotterCube
 * @example
 * <SchotterCube text="Hello World" />
 */
export const SchotterCube: React.SFC<SchotterCubeProps> = ({ index, total, rows, schotter }) => {
  const drift = index / total;
  const range = drift * drift * drift * 50;
  const { tx, ty, tr } = useMemo(() => computeTransforms(index, rows, drift, range), [index, total, rows]);

  const style = {
    transition: 'transform 500ms ease-in-out',
    transform: schotter ? `translate(${tx}%, ${ty}%) rotate(${tr}deg)` : '',
  };

  return <section style={style} className={`ba-2 bs-solid`} />;
};
