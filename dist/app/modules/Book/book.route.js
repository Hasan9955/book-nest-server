"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = require("express");
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const book_validation_1 = require("./book.validation");
const router = (0, express_1.Router)();
router.get('/', book_controller_1.bookControllers.getBooks);
router.get('/:bookId', book_controller_1.bookControllers.getSingleBook);
router.delete('/:bookId', book_controller_1.bookControllers.deleteBook);
router.put('/:bookId', (0, validateRequest_1.default)(book_validation_1.bookValidation.updateBookValidation), book_controller_1.bookControllers.updateBook);
router.post('/', (0, validateRequest_1.default)(book_validation_1.bookValidation.createBookValidation), book_controller_1.bookControllers.createBook);
exports.bookRoutes = router;
