export type AnyFunction = (...args: any[]) => any;
export type ReturnType<T extends AnyFunction> = T extends (...args: any[]) => infer R ? R : any;
export type Parameters<T extends AnyFunction> = T extends (...args: infer R) => any ? R : any;
