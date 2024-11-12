import { z } from "zod";


const createBookValidation = z.object({
    body: z.object({
        bookId: z.string(),
        title: z.string(),
        genre: z.string(),
        publishedYear: z.string(),
        totalCopies: z.number(),
        availableCopies: z.number()
    })
})


export const bookValidation = {
    createBookValidation
}