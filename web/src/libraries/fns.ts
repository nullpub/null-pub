export const nil = <T>(o: T | null | undefined): o is null | undefined => o === null || o === undefined;

export const notNil = <T>(o: T | null | undefined): o is T => !nil(o);

export const co = <T>(...args: Array<T | null | undefined>) => args.find(notNil);

export const cco = <T>(d: T) => (...args: Array<T | null | undefined>) => {
  const init = args.find(notNil);
  return notNil(init) ? init : d;
};

export const lco = <T, F>(v: T, fns: ((v: T) => F)[]) => {
  let i = 0;
  while (i < fns.length) {
    const out = fns[i](v);
    if (notNil(out)) {
      return out;
    }
    i++;
  }
};
