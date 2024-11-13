import app from "./app";

const port = 3000; 

function main () {
    const server = app.listen(port, () => {
        console.log(`Book Nest server is running on port: ${port}`);
    })
}


main();

