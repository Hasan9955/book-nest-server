"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const borrow_validation_1 = require("./borrow.validation");
const borrow_controller_1 = require("./borrow.controller");
const router = (0, express_1.Router)();
router.get('/borrow/overdue', borrow_controller_1.borrowControllers.overdue);
router.post('/borrow', (0, validateRequest_1.default)(borrow_validation_1.createBorrowValidation), borrow_controller_1.borrowControllers.createBorrow);
router.post('/return', borrow_controller_1.borrowControllers.returnBorrow);
exports.borrowRoutes = router;
