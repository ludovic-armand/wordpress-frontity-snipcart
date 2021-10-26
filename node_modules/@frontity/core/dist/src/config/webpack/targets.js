"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate the object for Webpack's target configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/target/.
 *
 * @param options - Defined in {@link TargetOptions}.
 *
 * @returns The configuration object for Webpack.
 */
const target = ({ target }) => {
    return target === "server" ? "node" : "web";
};
exports.default = target;
