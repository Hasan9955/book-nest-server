import { z } from "zod";


const createMemberValidation = z.object({
    body: z.object({ 
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        membershipDate: z.date().optional()
    })
})

const updateMemberValidation = z.object({
    body: z.object({ 
        name: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        membershipDate: z.date().optional()
    })
})


export const memberValidations = {
    createMemberValidation,
    updateMemberValidation
}