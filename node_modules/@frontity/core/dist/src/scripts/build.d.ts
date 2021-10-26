import "./utils/envs";
import { Mode } from "@frontity/types/config";
/**
 * The options of the build command.
 */
export interface BuildOptions {
    /**
     * The Webpack mode used, either "development" or "production".
     *
     * @defaultValue "production"
     */
    mode: Mode;
    /**
     * The JavaScript transpilation target. Either "es5" or "module".
     *
     * @defaultValue "both"
     */
    target: "es5" | "module" | "both";
    /**
     * The publicPath used in Webpack.
     *
     * @defaultValue "/static/"
     */
    publicPath: string;
    /**
     * Indicate if the Bundle Analyzer plugin should be included in the Webpack
     * configuration, in order to generate HTML files for bundle analyzing.
     *
     * @defaultValue false
     */
    analyze?: boolean;
}
declare const _default: ({ mode, target, publicPath, analyze, }: BuildOptions) => Promise<void>;
/**
 * The Frontity build command that creates all the bundles and assets necessary
 * to run the Frontity server.
 *
 * @param options - Defined in {@link BuildOptions}.
 *
 * @returns A promise that resolves when the build has finished.
 */
export default _default;
