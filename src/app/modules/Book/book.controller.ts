import catchAsync from "../../utils/catchAsync";
import { bookServices } from "./book.service";


const createBook = catchAsync(async (req, res) => {
    const data = req.body;

    const result = await bookServices.createBook(data)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Book registered successfully!',
        data: result
    })
})


export const bookControllers = {
    createBook
}