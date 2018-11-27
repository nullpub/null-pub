export const nil = <T>(o: T | null | undefined): o is null | undefined => o === null || o === undefined;
export const notNil = <T>(o: T | null | undefined): o is T => !nil(o);
