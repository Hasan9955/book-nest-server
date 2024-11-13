import { prisma } from "../../utils/prisma"
import { TMember } from "./member.interface"



const createMember = async (payload: TMember) => {
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