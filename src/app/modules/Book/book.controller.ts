import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/response";
import { bookServices } from "./book.service";



const createBook = catchAsync(async (req, res) => {
    const payload = req.body; 
    const result = await bookServices.createBook(payload)
    sendResponse(res, {
        statusCode: 201,
        message: 'Book created successfully!',
        data: result
    })
})

const getBooks = catchAsync(async (req, res) => {
    const result = await bookServices.getBooks();

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Books retrieved successfully!',
        data: result
    })
})


export const bookControllers = {
    createBook,
    getBooks,

}