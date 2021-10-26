"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate the object for Webpack's devtool configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/devtool.
 *
 * @param options - Defined in {@link DevToolsOptions}.
 *
 * @returns The configuration object for Webpack.
 */
const devtools = ({ mode }) => mode === "development" ? "eval-source-map" : false;
exports.default = devtools;
