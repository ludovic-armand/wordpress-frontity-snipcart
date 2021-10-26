"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_plugin_1 = __importDefault(require("@loadable/webpack-plugin"));
const webpack_1 = require("webpack");
const webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
/**
 * Generate the object for Webpack's plugins configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/plugins/.
 *
 * @param options - Object of type {@link PluginsOptions}.
 *
 * @returns The configuration object for Webpack.
 */
const plugins = ({ target, mode, outDir, analyze, }) => {
    const config = [];
    // Create HTML files for bundle analyzing.
    if (analyze)
        config.push(new webpack_bundle_analyzer_1.BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: `${target !== "server" ? `../` : ""}analyze/${target}-${mode}.html`,
            openAnalyzer: false,
            logLevel: "silent",
        }));
    // Ignore some files and folders.
    config.push(new webpack_1.WatchIgnorePlugin([new RegExp(outDir)]), new webpack_1.IgnorePlugin(/^encoding$/));
    // Support HMR in development. Only needed in client.
    if (target !== "server" && mode === "development")
        config.push(new webpack_1.HotModuleReplacementPlugin());
    // Needed for code splitting in client.
    if (target !== "server")
        config.push(new webpack_plugin_1.default({
            filename: `../bundling/chunks.${target}.json`,
        }));
    // Avoid code splitting in server.
    if (target === "server")
        config.push(new webpack_1.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
    return config;
};
exports.default = plugins;
