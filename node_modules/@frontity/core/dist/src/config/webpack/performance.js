"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate the object for Webpack's performance configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/performance/.
 *
 * @param options - Defined in {@link PerformanceOptions}.
 *
 * @returns The configuration object for Webpack.
 */
const performance = ({ target, }) => (Object.assign({}, (target === "server"
    ? {
        // Max size recommended for the server bundle: 5Mbs.
        maxEntrypointSize: 5000000,
        maxAssetSize: 5000000,
    }
    : {
        // Max size recommended for the client bundles: 500Kbs.
        maxEntrypointSize: 500000,
        maxAssetSize: 500000,
    })));
exports.default = performance;
