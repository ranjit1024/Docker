import user from  "./db"
import express from "express"

const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).json({
        msg:"Server Healthy"
    })
})

app.post("/", async (req,res)=>{
    const name = req.body.name;
    const password = req.body.password

    await user.create({
        name:name,
        password:password
    });
    res.status(200).json({
        mag:"User Created"
    })
})

app.listen(3000, ()=>{
    console.log("listing on port number 3000")
})