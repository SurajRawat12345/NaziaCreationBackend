import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(morgan('dev'));

// Test Route
app.get('/', (req, res) => {
    res.status(200).json({
        "success": true,
        "msg": "Hello World",
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})