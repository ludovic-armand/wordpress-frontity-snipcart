import { Site } from "@frontity/file-settings/types";
/**
 * This function applies the configuration from packages.
 *
 * @param sites - The sites.
 * @returns A dictionary split by the exported configuration function.
 */
export declare const readConfigurationsFromConfigFiles: (sites: Site[]) => Promise<Record<string, []>>;
