// A function that operates like a ternary operator but can be lazy
export type CascadePair<S, C = boolean> = [C, S];

export const cascade = <T>(...cases: CascadePair<T>[]) => {
  const match = cases.find(c => c[0]);
  return match !== undefined ? match[1] : undefined;
};

export const cascadeOrElse = <T>(def: T, ...cases: CascadePair<T>[]) => {
  const match = cascade(...cases);
  return match !== undefined ? match : def;
};

export const lazyCascade = <T>(...cases: CascadePair<T, () => boolean>[]) => {
  const match = cases.find(c => c[0]());
  return match !== undefined ? match[1] : undefined;
};

export const lazyCascadeOrElse = <T>(def: T, ...cases: CascadePair<T, () => boolean>[]) => {
  const match = lazyCascade(...cases);
  return match !== undefined ? match : def;
};
