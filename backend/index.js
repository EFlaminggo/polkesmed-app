import express from "express";
import cors from "cors";

const app = express();


const port = 8000;
app.use(express.json()); // To parse any incoming request in JSON format
app.use(cors()); // For CORS policy

app.get('/', (req, res) => {
    res.send("Hello world!");
})

// 127.0.0.1 is same as localhost 
app.listen(port, () => {
    console.log(`Server listening at 127.0.0.1:${port}`)
});
