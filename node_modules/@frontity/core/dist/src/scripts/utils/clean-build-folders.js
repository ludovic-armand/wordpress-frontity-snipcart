"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
exports.default = async ({ outDir }) => {
    await fs_extra_1.ensureDir(outDir);
    await fs_extra_1.emptyDir(outDir);
    await fs_extra_1.ensureDir(`${outDir}/bundling/entry-points`);
};
