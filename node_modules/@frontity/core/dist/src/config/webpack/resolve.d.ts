import { WebpackConfig } from "@frontity/types/config";
/**
 * Generate the object for Webpack's resolve configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/resolve/.
 *
 * @returns The configuration object for Webpack.
 */
declare const resolve: () => WebpackConfig["resolve"];
export default resolve;
