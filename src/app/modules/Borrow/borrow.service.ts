import { prisma } from "../../utils/prisma"
import { TBorrow } from "./borrow.interface";



const createBorrow = async (payload: TBorrow) => {
    const result = await prisma.borrowRecord.create({
        data: payload
    })
    return result;
}

const returnBorrow = async (borrowId: string) => {

    const today = new Date();
    console.log(today);

    await prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId
        }
    })
    const result = await prisma.borrowRecord.update({
        where: {
            borrowId
        },
        data: {
            returnDate: today
        }
    })
    return result;
}


const overdue = async () => {

    const overDueTime = new Date();
    overDueTime.setDate(overDueTime.getDate() - 14);


    const allOverDueBorrows = await prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: { lte: overDueTime }
        },
        include: {
            book: true,
            member: true
        }
    })

    if (allOverDueBorrows.length === 0) {
        return null
      }


    const overDueList = allOverDueBorrows.map(borrow => {
        const overdueDays = Math.floor(
            (new Date().getTime() - borrow.borrowDate.getTime()) / (1000 * 60 * 60 * 24) - 14
          );

          return {
            borrowId: borrow.borrowId,
            bookTitle: borrow.book.title,
            borrowerName: borrow.member.name,
            overdueDays
          };
    })

    return overDueList;
}



export const borrowServices = {
    createBorrow,
    returnBorrow,
    overdue
}