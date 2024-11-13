import { z } from "zod";





export const createBorrowValidation = z.object({
    body: z.object({
        bookId: z.string(),
        memberId: z.string()
    })
})