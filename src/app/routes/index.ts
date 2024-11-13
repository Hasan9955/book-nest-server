import { Router } from "express";
import { bookRoutes } from "../modules/Book/book.route";
import { memberRoutes } from "../modules/Member/member.routes";
import { borrowRoutes } from "../modules/Borrow/borrow.routes";

const router = Router();

const allRoutes = [
    {
        path: '/books',
        route: bookRoutes
    },
    {
        path: '/members',
        route: memberRoutes
    },
    {
        path: '/',
        route: borrowRoutes
    }
]

allRoutes.forEach((route) => router.use(route.path, route.route))
 

export const mainRoute = router;