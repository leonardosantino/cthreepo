import express from "express";
import "express-async-errors"
import userRoutes from "./routes/userRoutes";
import connection from "./database/connection";
import authorization from "./routes/authorizationRoute";
import bearerAuthentication from "./middlewares/bearerAuthentication";

connection().then(() => {

  const app = express();

  app.use(express.json())
  // app.use(express.urlencoded({ extended: true }))
  app.use(authorization)
  app.use(bearerAuthentication, userRoutes)

  app.listen(3000)

}).catch((errors) => {
  console.error(errors)
})
