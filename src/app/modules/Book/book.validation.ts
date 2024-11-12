import { z } from "zod";


const createBookValidation = z.object({
    body: z.object({
        bookId: z.string(),

    })
})


export const bookValidation = {
    createBookValidation
}