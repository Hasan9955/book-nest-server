import { z } from "zod";


const createBookValidation = z.object({
    body: z.object({ 
        title: z.string(),
        genre: z.string(),
        publishedYear: z.number(),
        totalCopies: z.number(),
        availableCopies: z.number()
    })
})


export const bookValidation = {
    createBookValidation
}