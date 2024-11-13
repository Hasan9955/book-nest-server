"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoutes = void 0;
const express_1 = require("express");
const member_controller_1 = require("./member.controller");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const member_validation_1 = require("./member.validation");
const router = (0, express_1.Router)();
router.get('/', member_controller_1.memberControllers.getAllMembers);
router.get('/:memberId', member_controller_1.memberControllers.getSingleMember);
router.post('/', (0, validateRequest_1.default)(member_validation_1.memberValidations.createMemberValidation), member_controller_1.memberControllers.createMember);
router.put('/:memberId', (0, validateRequest_1.default)(member_validation_1.memberValidations.updateMemberValidation), member_controller_1.memberControllers.updateMember);
router.delete('/:memberId', member_controller_1.memberControllers.deleteMember);
exports.memberRoutes = router;
