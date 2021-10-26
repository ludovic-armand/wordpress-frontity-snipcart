import webpack from "webpack";
/**
 * Wrapper to run `webpack` asynchronously.
 *
 * @param config - Webpack's config object, defined in {@link
 * webpack.Configuration}.
 *
 * @returns A promise that resolves when Webpack finishes.
 */
export declare const webpackAsync: (config: webpack.Configuration) => Promise<webpack.Compiler>;
