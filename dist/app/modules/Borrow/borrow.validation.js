"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBorrowValidation = void 0;
const zod_1 = require("zod");
exports.createBorrowValidation = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string(),
        memberId: zod_1.z.string()
    })
});