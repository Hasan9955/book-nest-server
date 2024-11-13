import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/response";
import { borrowServices } from "./borrow.service";



const createBorrow = catchAsync(async (req, res) => {
    const result = await borrowServices.createBorrow(req.body)

    sendResponse(res, {
        statusCode: 200,
        message: "Book borrowed successfully",
        data: result
    })
})

const returnBorrow = catchAsync(async (req, res) => {
    const result = await borrowServices.returnBorrow(req.body.borrowId)

    sendResponse(res, {
        statusCode: 200,
        message: "Book returned successfully",
        data: result
    })
})


const overdue = catchAsync(async (req, res) => {
    const result = await borrowServices.overdue();

    sendResponse(res, {
        statusCode: 200,
        message: result?.length && result?.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
        data: result
    })

})




export const borrowControllers = {
    createBorrow,
    returnBorrow,
    overdue
}