import express, { Application, urlencoded } from 'express';
import cors from 'cors';

const app: Application = express();



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Book Nest server is working successfully!',
    })
})


export default app;
