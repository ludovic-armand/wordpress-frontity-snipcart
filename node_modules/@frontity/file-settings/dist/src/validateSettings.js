"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniq_1 = __importDefault(require("ramda/src/uniq"));
const uniqBy_1 = __importDefault(require("ramda/src/uniqBy"));
// This function validates the packages.
const validatePackages = (packages) => {
    // Check that every package has a unique name.
    const uniquePackages = uniq_1.default(packages
        .map((pkg) => (typeof pkg === "string" ? pkg : pkg.name))
        .filter((pkg) => pkg));
    if (uniquePackages.length < packages.length) {
        throw new Error("All the packages must have a unique name.");
    }
};
// This function is used to validate the imported settings.
exports.default = (settings) => {
    if (!Array.isArray(settings)) {
        // Validate packages in mono settings.
        validatePackages(settings.packages);
    }
    if (Array.isArray(settings)) {
        // Validate packages in multi settings.
        settings.forEach((s) => validatePackages(s.packages));
        // Check that every multi settings has a unique name.
        const uniqueNames = uniqBy_1.default((s) => s.name, settings.filter((s) => s.name));
        if (uniqueNames.length < settings.length) {
            throw new Error("All the settings must have a unique name.");
        }
    }
};
