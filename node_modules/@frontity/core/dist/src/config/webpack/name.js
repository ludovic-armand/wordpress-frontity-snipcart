"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate the object for Webpack's name configuration.
 *
 * It is important to use the names 'client' and 'server' for
 * `webpack-hot-server-middleware`.
 *
 * @param options - Defined in {@link NameOptions}.
 *
 * @returns The configuration object for Webpack.
 */
const name = ({ target }) => target === "server" ? "server" : "client";
exports.default = name;
