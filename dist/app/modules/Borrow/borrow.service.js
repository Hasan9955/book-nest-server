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
exports.borrowServices = void 0;
const prisma_1 = require("../../utils/prisma");
const createBorrow = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.borrowRecord.create({
        data: payload
    });
    return result;
});
const returnBorrow = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    console.log(today);
    yield prisma_1.prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId
        }
    });
    const result = yield prisma_1.prisma.borrowRecord.update({
        where: {
            borrowId
        },
        data: {
            returnDate: today
        }
    });
    return result;
});
const overdue = () => __awaiter(void 0, void 0, void 0, function* () {
    const overDueTime = new Date();
    overDueTime.setDate(overDueTime.getDate() - 14);
    const allOverDueBorrows = yield prisma_1.prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: { lte: overDueTime }
        },
        include: {
            book: true,
            member: true
        }
    });
    if (allOverDueBorrows.length === 0) {
        return null;
    }
    const overDueList = allOverDueBorrows.map(borrow => {
        const overdueDays = Math.floor((new Date().getTime() - borrow.borrowDate.getTime()) / (1000 * 60 * 60 * 24) - 14);
        return {
            borrowId: borrow.borrowId,
            bookTitle: borrow.book.title,
            borrowerName: borrow.member.name,
            overdueDays
        };
    });
    return overDueList;
});
exports.borrowServices = {
    createBorrow,
    returnBorrow,
    overdue
};
