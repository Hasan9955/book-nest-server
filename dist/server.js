"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = 3000;
let server;
function main() {
    server = app_1.default.listen(port, () => {
        console.log(`Book Nest server is running on port: ${port}`);
    });
}
main();
