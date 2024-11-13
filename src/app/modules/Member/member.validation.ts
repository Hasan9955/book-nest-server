import { z } from "zod";


const createMemberValidation = z.object({
    body: z.object({ 
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        membershipDate: z.string().optional()
    })
})

const updateMemberValidation = z.object({
    body: z.object({ 
        name: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        membershipDate: z.string().optional()
    })
})


export const memberValidations = {
    createMemberValidation,
    updateMemberValidation
}