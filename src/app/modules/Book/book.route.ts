import { Router } from "express";
import { bookControllers } from "./book.controller";
import validateRequest from "../../utils/validateRequest";
import { bookValidation } from "./book.validation";


const router = Router();


router.get('/', bookControllers.getBooks)

router.get('/:bookId', bookControllers.getSingleBook)

router.delete('/:bookId', bookControllers.deleteBook)

router.put('/:bookId', validateRequest(bookValidation.updateBookValidation), bookControllers.updateBook)

router.post('/', validateRequest(bookValidation.createBookValidation), bookControllers.createBook)



export const bookRoutes = router;