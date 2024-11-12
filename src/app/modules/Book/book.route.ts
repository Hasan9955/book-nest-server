import { Router } from "express";
import { bookControllers } from "./book.controller";
import validateRequest from "../../utils/validateRequest";
import { bookValidation } from "./book.validation";


const router = Router();


router.get('/', bookControllers.getBooks)

router.post('/', validateRequest(bookValidation.createBookValidation), bookControllers.createBook)



export const bookRoutes = router;