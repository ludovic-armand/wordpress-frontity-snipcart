/// <reference types="express-serve-static-core" />
import { MultiCompiler } from "webpack";
import express from "express";
import { DevOptions } from "../dev";
declare const _default: ({ mode, port, isHttps, target, openBrowser, publicPath, }: DevOptions) => Promise<{
    /**
     * The app created by Express, ready to be used by webpack-dev-middleware.
     */
    app: express.Express;
    /**
     * A function that accepts a {@link MultiCompiler} and starts the server
     * once Webpack has finished the bundles.
     */
    done: (compiler: MultiCompiler) => void;
}>;
/**
 * Create an express app ready to be used with webpack-dev-middleware.
 *
 * @param options - Defined in {@link DevOptions}.
 *
 * @returns - An object with the app and a callback function that starts the
 * server when Webpack has finished.
 */
export default _default;
