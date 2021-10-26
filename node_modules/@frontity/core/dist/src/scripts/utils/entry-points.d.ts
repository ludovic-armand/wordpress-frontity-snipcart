import { Site } from "@frontity/file-settings";
import { EntryPoints } from "../../../types";
import { Mode } from "@frontity/types/config";
/**
 * The name and location of a Frontity package.
 */
interface Package {
    /**
     * The name of the package.
     *
     * @example `@frontity/wp-source`
     */
    name: string;
    /**
     * The mode of that package.
     *
     * @example "amp"
     *
     * @defaultValue "default"
     */
    mode: string;
    /**
     * The path on the filesystem for that package.
     */
    path?: string;
}
/**
 * The type of bundle that needs to be generated.
 */
declare type Type = "client" | "server";
/**
 * The options of the {@link entryPoint} function.
 */
interface EntryPointOptions extends Package {
    /**
     * The type of bundle that needs to be generated.
     */
    type: Type;
}
/**
 * The options of the {@link checkForPackages} helper.
 */
interface CheckForPackagesOptions {
    /**
     * The list of sites included in the settings.
     */
    sites: Site[];
}
/**
 * The options of the {@link generateServerEntryPoint} helper.
 */
interface GenerateServerEntryPointOptions {
    /**
     * The list of sites included in the settings.
     */
    sites: Site[];
    /**
     * The output directory where the bundle will be generated.
     */
    outDir: string;
}
/**
 * The options of the {@link generateClientEntryPoints} helper.
 */
interface GenerateEntryPointsOptions {
    /**
     * The list of sites included in the settings.
     */
    sites: Site[];
    /**
     * The output directory where the bundle will be generated.
     */
    outDir: string;
    /**
     * The mode used for the site.
     */
    mode: Mode;
}
/**
 * Resolve the path of a package.
 *
 * @param options - Defined in {@link EntryPointOptions}.
 * @returns The path of the package.
 */
export declare const entryPoint: ({ name, mode, type, }: EntryPointOptions) => Promise<string>;
/**
 * Throw an error if any of the packages defined in the settings is not
 * installed.
 *
 * @param options - Defined in {@link CheckForPackagesOptions}.
 */
export declare const checkForPackages: ({ sites, }: CheckForPackagesOptions) => Promise<void>;
/**
 * Create an entry-point file for the server and return the bundle name and
 * path.
 *
 * @param options - Defined in {@link GenerateServerEntryPointOptions}.
 * @returns The name and path of the final server bundle.
 */
export declare const generateServerEntryPoint: ({ sites, outDir, }: GenerateServerEntryPointOptions) => Promise<EntryPoints>;
/**
 * Create entry-point files for the client and return all the bundle names and
 * paths.
 *
 * @param options - Defined in {@link GenerateEntryPointsOptions}.
 * @returns The name and path of the final client bundles.
 */
export declare const generateClientEntryPoints: ({ sites, outDir, mode, }: GenerateEntryPointsOptions) => Promise<EntryPoints[]>;
/**
 * Create entry-point files and return all the bundle names and paths.
 *
 * @param options - Defined in {@link GenerateEntryPointsOptions}.
 * @returns The name and path of the final bundles.
 */
declare const generateEntryPoints: ({ sites, outDir, mode, }: GenerateEntryPointsOptions) => Promise<EntryPoints[]>;
export default generateEntryPoints;
