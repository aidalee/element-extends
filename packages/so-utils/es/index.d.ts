export declare const isString: (val: unknown) => val is string
export declare const isBoolean: (val: unknown) => val is boolean
export declare const isNumber: (val: unknown) => val is number
export declare const isObject: (val: unknown) => val is Record<string, any>
export declare const isPlainObject: (val: unknown) => val is Record<string, any>
export declare const isArray: (val: unknown) => val is any[]
export declare const isURL: (val: string | undefined | null) => boolean
export declare const isEmpty: (val: unknown) => boolean
export declare const toNumber: (
  val: number | string | boolean | undefined | null
) => number
export declare const bigCamelize: (s: string) => string
export declare const camelize: (s: string) => string
export declare const kebabCase: (s: string) => string
