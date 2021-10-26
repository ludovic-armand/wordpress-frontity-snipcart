"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate the object for Webpack's externals configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/externals/.
 *
 * @param options - Defined in {@link ExternalsOptions}.
 *
 * @returns The configuration object for Webpack.
 */
const externals = ({ target, }) => (Object.assign({}, (target !== "server" && {
    he: "{}",
    "node-fetch": "window.fetch",
    url: "{ URL: window.URL }",
})));
exports.default = externals;
