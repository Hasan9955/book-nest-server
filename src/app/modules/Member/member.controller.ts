import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/response";
import { memberServices } from "./member.service";



const createMember = catchAsync(async (req, res) => {
    const result = await memberServices.createMember(req.body);

    sendResponse(res, {
        statusCode: 201,
        message: 'Member created successfully',
        data: result
    })
})


const getAllMembers = catchAsync(async (req, res) => {
    const result = await memberServices.getAllMembers()


    sendResponse(res, {
        statusCode: 200,
        message: 'Members retrieved successfully',
        data: result
    })
})

const getSingleMember = catchAsync(async (req, res) => {
    const result = await memberServices.getSingleMember(req.params.memberId)


    sendResponse(res, {
        statusCode: 200,
        message: 'Member retrieved successfully',
        data: result
    })
})

const updateMember = catchAsync(async (req, res) => {
    const result = await memberServices.updateMember(req.params.memberId, req.body)


    sendResponse(res, {
        statusCode: 200,
        message: 'Member updated successfully',
        data: result
    })
})

const deleteMember = catchAsync(async (req, res) => {
    const result = await memberServices.deleteMember(req.params.memberId)


    sendResponse(res, {
        statusCode: 200,
        message: 'Member deleted successfully',
        data: null
    })
})


export const memberControllers = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember
}