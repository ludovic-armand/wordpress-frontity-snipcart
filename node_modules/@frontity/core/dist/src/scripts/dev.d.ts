import "./utils/envs";
import { Mode } from "@frontity/types/config";
/**
 * The options of the dev command.
 */
export interface DevOptions {
    /**
     * The Webpack mode used, either "development" or "production".
     *
     * @defaultValue "development"
     */
    mode: Mode;
    /**
     * The port used to start the server.
     *
     * @defaultValue 3000
     */
    port: number;
    /**
     * Indicate if the server should be started using HTTPS. The certs used
     * are in the /certs folder of this package. They are valid only for local
     * usage.
     *
     * @defaultValue false
     */
    isHttps: boolean;
    /**
     * The JavaScript transpilation target. Either "es5" or "module".
     *
     * @defaultValue "module"
     */
    target: "es5" | "module";
    /**
     * If this command should open a browser or not.
     *
     * @defaultValue true
     */
    openBrowser?: boolean;
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
declare const _default: ({ isHttps, mode, port, target, openBrowser, publicPath, analyze, }: DevOptions) => Promise<void>;
/**
 * The Frontity dev command that starts a development Frontity server.
 *
 * @param options - Defined in {@link DevOptions}.
 *
 * @returns A promise that resolves when the server has started.
 */
export default _default;
