import { Configuration } from "webpack";
import { Target, Mode } from "@frontity/types/config";
/**
 * The options for the {@link plugins} function.
 */
interface PluginsOptions {
    /**
     * The target of the build: "server", "es5" or "module".
     */
    target: Target;
    /**
     * The mode of the build: "development" or "production".
     */
    mode: Mode;
    /**
     * The output directory.
     */
    outDir: string;
    /**
     * Flag indicating if the Bundle Analyzer plugin should be included.
     */
    analyze: boolean;
}
/**
 * Generate the object for Webpack's plugins configuration.
 *
 * Official Webpack docs: https://webpack.js.org/configuration/plugins/.
 *
 * @param options - Object of type {@link PluginsOptions}.
 *
 * @returns The configuration object for Webpack.
 */
declare const plugins: ({ target, mode, outDir, analyze, }: PluginsOptions) => Configuration["plugins"];
export default plugins;
