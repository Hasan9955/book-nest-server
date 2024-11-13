"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberServices = void 0;
const prisma_1 = require("../../utils/prisma");
const createMember = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isMemberExists = yield prisma_1.prisma.member.findUnique({
        where: {
            email: payload.email
        }
    });
    if (isMemberExists) {
        throw new Error("This email id is already registered!");
    }
    const result = yield prisma_1.prisma.member.create({
        data: payload
    });
    return result;
});
const getAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.member.findMany();
    return result;
});
const getSingleMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    });
    return result;
});
const updateMember = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    });
    const result = yield prisma_1.prisma.member.update({
        where: {
            memberId: id
        },
        data: payload
    });
    return result;
});
const deleteMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    });
    const result = yield prisma_1.prisma.member.delete({
        where: {
            memberId: id
        }
    });
    return result;
});
exports.memberServices = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember
};
