import { Router } from "express";
import { bookControllers } from "./book.controller";


const router = Router();


router.get('/', bookControllers.createBook)



export const bookRoutes = router;