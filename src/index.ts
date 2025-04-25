import express from "express"
import userRouter from "./routes/usreRoutes";
import connectDB from "./db";
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/user',userRouter );

app.get('/', (req,res)=>{
    res.status(200).json({
        msg:"halthy server"
    })
})

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`listing on port number ${port}`)
    })
})