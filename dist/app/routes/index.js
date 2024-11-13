"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoute = void 0;
const express_1 = require("express");
const book_route_1 = require("../modules/Book/book.route");
const member_routes_1 = require("../modules/Member/member.routes");
const borrow_routes_1 = require("../modules/Borrow/borrow.routes");
const router = (0, express_1.Router)();
const allRoutes = [
    {
        path: '/books',
        route: book_route_1.bookRoutes
    },
    {
        path: '/members',
        route: member_routes_1.memberRoutes
    },
    {
        path: '/',
        route: borrow_routes_1.borrowRoutes
    }
];
allRoutes.forEach((route) => router.use(route.path, route.route));
exports.mainRoute = router;
