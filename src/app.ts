import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import { mainRoute } from './app/routes';

const app: Application = express();


//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())




app.use('/api', mainRoute)
app.get('/', (req, res) => {
    res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Book Nest server is working successfully!',
    })
})


export default app;
