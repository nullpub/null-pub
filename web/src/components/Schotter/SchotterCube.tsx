import * as React from 'react';
import { useState } from 'react';

import { randomIntInRange, randomInRange } from '../../libraries/random';
import { useTiming } from '../../libraries/useTiming';

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
  useTiming(`RenderSchotterCube${index}`);
  const generateTransforms = () => computeTransforms(index / total, Math.pow(index / total, 2) * 50);
  const [state, setState] = useState(generateTransforms());
  const { tx, ty, tr } = state;
  const style = {
    transform: `translate3d(${tx}%, ${ty}%, 0) rotate(${tr}rad)`,
    transition: 'transform 1s ease-out',
  };
  const shift = () => setState(generateTransforms());

  return <section style={style} className={`bwa-1 bs-solid schotter-cube`} onMouseOver={shift} />;
};
