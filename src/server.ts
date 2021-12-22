import express from "express";
import userRoutes from "./routes/userRoutes";
import connection from "./database/connection";
import "express-async-errors"

connection().then(() => {

    const app = express();

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use(userRoutes)

    app.listen(3000)

}).catch((error) => {
    console.error(error)
})
