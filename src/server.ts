import app from "./app";

const port = 3000;

let server;

function main () {
    server = app.listen(port, () => {
        console.log(`Book Nest server is running on port: ${port}`);
    })
}


main();

