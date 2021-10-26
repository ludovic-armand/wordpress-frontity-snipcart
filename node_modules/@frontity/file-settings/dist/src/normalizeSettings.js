"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mergeDeepRight_1 = __importDefault(require("ramda/src/mergeDeepRight"));
const validateSettings_1 = __importDefault(require("./validateSettings"));
const defaultSettings = {
    name: "default",
    mode: "default",
    state: {},
};
const defaultPackage = {
    active: true,
    state: {},
};
// This function merges the imported settings with the default settings.
const mergeSettings = (_a) => {
    var { packages } = _a, settings = __rest(_a, ["packages"]);
    return (Object.assign(Object.assign({}, mergeDeepRight_1.default(defaultSettings, settings)), { packages: packages.map((pkg) => typeof pkg === "string"
            ? Object.assign(Object.assign({}, defaultPackage), { name: pkg }) : Object.assign(Object.assign({}, defaultPackage), pkg)) }));
};
// This function normalizes the imported settings.
const normalizeSettings = (settings) => {
    // TODO
    // Default settings and validator from packages
    // should be imported and used with each package.
    // Validate settings before the merge.
    validateSettings_1.default(settings);
    // Merge mono settings.
    if (!Array.isArray(settings))
        return [mergeSettings(settings)];
    // Merge multi settings.
    return settings.map((s) => mergeSettings(s));
};
exports.default = normalizeSettings;
