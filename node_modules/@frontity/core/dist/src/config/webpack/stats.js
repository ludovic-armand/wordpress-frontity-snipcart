"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate the object for Webpack's mode configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/mode.
 *
 * @param options - Defined in {@link StatsOptions}.
 *
 * @returns The configuration object for Webpack.
 */
const stats = ({ mode }) => mode === "development"
    ? {
        all: false,
        hash: false,
        assets: true,
        colors: true,
        errors: true,
        warnings: true,
        errorDetails: true,
        excludeAssets: /chunks\..*?\.json/,
    }
    : false;
exports.default = stats;
