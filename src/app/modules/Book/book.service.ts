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


export const bookServices = {
    createBook,
    getBooks

}