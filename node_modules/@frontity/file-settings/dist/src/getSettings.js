"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const importSettings_1 = __importDefault(require("./importSettings"));
// This function returns the settings required by
// the `core` package.
exports.default = async ({ name, url }) => {
    // Import the settings from a file.
    const allSettings = await importSettings_1.default();
    // 1. Return settings when `allSettings` is an array of only
    // one element.
    if (allSettings.length === 1)
        return allSettings[0];
    // 2. Return settings when `name` param is passed and exist
    // settings with that name.
    if (name) {
        const settings = allSettings.find((s) => s.name === name);
        if (settings)
            return settings;
        else {
            throw new Error(`Do not exist any settings named '${name}'.`);
        }
    }
    // 3. Return settings when `match` match the param `url`.
    const validMatch = allSettings
        // Get all match in one array.
        .reduce((final, current) => {
        if (current.match)
            final = final.concat(current.match);
        return final;
    }, [])
        // Filter them to get only the ones that match the `url`
        .filter((match) => new RegExp(match).test(url))
        // Sort them by length and pick the longest one.
        .sort((a, b) => b.length - a.length)[0];
    // If a valid match was found return those settings.
    if (validMatch)
        return allSettings.find((settings) => settings.match && settings.match.includes(validMatch));
    // 4. Return the first settings without a match defined or,
    // if all of them have match, the first settings in the array.
    return allSettings.filter((settings) => !settings.match)[0] || allSettings[0];
};
