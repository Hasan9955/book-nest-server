import { Router } from "express";
import { bookRoutes } from "../modules/Book/book.route";

const router = Router();

const allRoutes = [
    {
        path: '/books',
        route: bookRoutes
    }
]

allRoutes.forEach((route) => router.use(route.path, route.route))


export const mainRoute = router;