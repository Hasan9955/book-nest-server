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

const getSingleBook = catchAsync(async (req, res) => {
    const result = await bookServices.getSingleBook(req.params.bookId);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Book retrieved successfully!',
        data: result
    })
})

const updateBook = catchAsync(async (req, res) => {
    const result = await bookServices.updateBook(req.params.bookId, req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Book updated successfully!',
        data: result
    })
})

const deleteBook = catchAsync(async (req, res) => {
    const result = await bookServices.deleteBook(req.params.bookId);

    sendResponse(res, {
        statusCode: 200,
        message: "Book successfully deleted.",
        data: null
    })
})


export const bookControllers = {
    createBook,
    getBooks,
    getSingleBook,
    updateBook,
    deleteBook

}