"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const extensions = [".js", ".jsx", ".ts", ".tsx"];
// Check if the entry point exists using all the possible extensions.
exports.default = async (path) => {
    const allExist = await Promise.all(extensions.map(async (extension) => {
        const exists = await fs_extra_1.pathExists(path_1.resolve(process.cwd(), "node_modules", `${path}${extension}`));
        if (exists)
            return extension;
        return false;
    }));
    return allExist.reduce((prev, curr) => prev || curr, false);
};
