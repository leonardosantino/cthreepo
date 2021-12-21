import express from "express";
import userRoutes from "./routes/userRoutes";
import connection from "./database/connection";

connection().then((connection)=>{
    
    const app = express();

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    
    app.use(userRoutes)
    
    app.listen(3000)

}).catch((error)=>{
    console.error(error)
})
