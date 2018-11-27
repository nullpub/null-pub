import * as React from 'react';
import { useMemo } from 'react';

import { randomIntInRange, randomInRange } from '../../libraries/random';

import './Schotter.css';

export interface SchotterCubeProps {
  index: number;
  total: number;
}

const computeTransforms = (drift: number, range: number) => {
  const tx: number = randomIntInRange((-1 * range) / 2, range / 2); // Generate Horizontal Delta
  const ty = randomIntInRange((-1 * range) / 2, range / 2); // Generate Vertical Delta
  const tr = randomInRange((drift * Math.PI) / -2, (drift * Math.PI) / 2); // Generate Rotation Delta
  return { tx, ty, tr };
};

/**
 * @render react
 * @name SchotterCube
 * @example
 * <SchotterCube index={0} total={1} />
 */
export const SchotterCube: React.SFC<SchotterCubeProps> = ({ index, total }) => {
  const { tx, ty, tr } = useMemo(() => computeTransforms(index / total, Math.pow(index / total, 3) * 50), [total]);
  const style = {
    transform: `translate(${tx}%, ${ty}%) rotate(${tr}rad)`,
  };

  return <section style={style} className={`ba-1 bs-solid schotter-cube`} />;
};
