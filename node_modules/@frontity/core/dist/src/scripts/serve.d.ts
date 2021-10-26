import "./utils/envs";
/**
 * Options for {@link serve}.
 */
export interface ServeOptions {
    /**
     * The port number to use.
     */
    port: number;
    /**
     * Whether to start the server with `https` using a local self-signed
     * certificate.
     */
    isHttps: boolean;
}
/**
 * Create a node server and run the server.js bundle.
 *
 * @param options - Defined in {@link ServeOptions}.
 */
declare const serve: ({ isHttps, port }: ServeOptions) => Promise<void>;
export default serve;
