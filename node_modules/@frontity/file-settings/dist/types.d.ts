declare type Base = {
    match?: string[];
    mode?: string;
    state?: object;
};
export declare type Package = {
    name: string;
    active?: boolean;
    state?: object;
};
export declare type NormalizedPackage = Package & {
    active: boolean;
    state: object;
};
declare type Mono = Base & {
    name?: string;
};
declare type Multi = Base & {
    name: string;
};
declare type Imported<T> = Base & {
    packages: (string | T)[];
};
declare type Normalized<T> = Base & {
    mode: string;
    state: object;
    packages: T[];
};
export declare type MonoSettings<T = Package> = Imported<T> & Mono;
export declare type MultiSettings<T = Package> = Imported<T> & Multi;
export declare type Settings<T = Package> = MonoSettings<T> | MultiSettings<T>[];
export declare type NormalizedSettings<T = NormalizedPackage> = Normalized<T> & Multi;
export declare type Site = {
    name: string;
    mode: string;
    packages: string[];
};
export {};
