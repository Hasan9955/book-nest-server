import { prisma } from "../../utils/prisma"
import { TMember } from "./member.interface"



const createMember = async (payload: TMember) => {
    const isMemberExists = await prisma.member.findUnique({
        where: {
            email: payload.email
        }
    })
    if(isMemberExists){
        throw new Error("This email id is already registered!")
    }
    const result = await prisma.member.create({
        data: payload
    })
    return result
}

const getAllMembers = async () => {
    const result = await prisma.member.findMany();
    return result
}

const getSingleMember = async (id: string) => {
    const result = await prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    })
    return result
}

const updateMember = async (id: string, payload: Partial<TMember>) => {
    await prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    })

    const result = await prisma.member.update({
        where: {
            memberId: id
        },
        data: payload
    })

    return result;
}

const deleteMember = async (id: string) => {
    await prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    })

    const result = await prisma.member.delete({
        where: {
            memberId: id
        }
    })

    return result;
}


export const memberServices = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember
} 