import reduce from 'lodash-es/reduce';
import toPairs from 'lodash-es/toPairs';

/**
 * Takes a camelcase string and returns a dasherized string
 * e.g. thisIsAMethod => this-is-a-method
 */
const camelCaseToDash = (str: string): string => str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

/**
 * A prefix based string accumulator for toClass
 */
const stringAccumulator = (acc: string, [c, b]: [string, boolean]) => (b ? `${camelCaseToDash(c)} ${acc}` : acc);

/**
 * Takes a record of camelCase class names with boolean values and returns
 * a space delimited string of dasherized class names for all keys with value true
 */
export const toClass = (classes: Record<string, boolean>, init: string = ''): string =>
  reduce(toPairs(classes), stringAccumulator, init);
