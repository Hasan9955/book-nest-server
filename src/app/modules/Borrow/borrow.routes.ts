import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { createBorrowValidation } from "./borrow.validation";
import { borrowControllers } from "./borrow.controller";




const router = Router();

router.get('/borrow/overdue', borrowControllers.overdue)

router.post('/borrow', validateRequest(createBorrowValidation), borrowControllers.createBorrow)

router.post('/return', borrowControllers.returnBorrow)

export const borrowRoutes = router;

