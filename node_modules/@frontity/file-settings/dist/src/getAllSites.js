"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const importSettings_1 = __importDefault(require("./importSettings"));
exports.default = async () => {
    // Import the settings from a file.
    const allSettings = await importSettings_1.default();
    // Return only name, mode and packages in an array of sites.
    return allSettings.map(({ name, mode, packages }) => ({
        name,
        mode,
        packages: packages.filter((pkg) => pkg.active).map((pkg) => pkg.name),
    }));
};
