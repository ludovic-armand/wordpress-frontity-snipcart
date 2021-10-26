import { ServeOptions } from "./serve";
import { BuildOptions } from "./build";
import { DevOptions } from "./dev";
/**
 * The serve function that dynamically imports the Frontity serve command.
 *
 * @param args - Defined in {@link ServeOptions}.
 * @returns The imported module.
 */
export declare const serve: (args: ServeOptions) => Promise<void>;
/**
 * The build function that dynamically imports the Frontity build command.
 *
 * @param args - Defined in {@link BuildOptions}.
 *
 * @returns The imported module.
 */
export declare const build: (args: BuildOptions) => Promise<void>;
/**
 * The dev function that dynamically imports the Frontity dev command.
 *
 * @param args - Defined in {@link DevOptions}.
 *
 * @returns The imported module.
 */
export declare const dev: (args: DevOptions) => Promise<void>;
