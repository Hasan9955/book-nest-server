import { prisma } from "../../utils/prisma"
import { TBook } from "./book.interface";


const createBook =  async (payload: TBook) => {

    const result = await prisma.book.create({
        data: payload
    })
    return result;

}

const getBooks = async () => {
    const result = await prisma.book.findMany();
    return result;
}


const getSingleBook = async (id: string) => {
    const result = await prisma.book.findUniqueOrThrow({
        where: {
            bookId: id
        }
    });
    return result;
}

const updateBook = async (id: string, payload: Partial<TBook>) => {
    await prisma.book.findUniqueOrThrow({
        where: {
            bookId: id
        }
    });

    const result = await prisma.book.update({
        where: {
            bookId: id
        },
        data: payload
    });
    return result;
}

const deleteBook = async (id: string) => {
    await prisma.book.findUniqueOrThrow({
        where: {
            bookId: id
        }
    });

    const result = await prisma.book.delete({
        where: {
            bookId: id
        }
    });

    return result;
}


export const bookServices = {
    createBook,
    getBooks,
    getSingleBook,
    updateBook,
    deleteBook

}