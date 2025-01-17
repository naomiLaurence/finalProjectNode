
import express, { json } from "express";
import notFound from "./middleware/not-found";
import connect from "./db/connection";
import configDevEnv from "../config";
import errorHandler from "./middleware/error-handler";
import morgan from "morgan";
import { Logger } from "./logs/logger";
import cors from 'cors';
import { cartRouter } from "./routes/cart-router";
import { productRouter } from "./routes/products-router";
import { usersRouter } from "./routes/users-router";

configDevEnv();
connect();

const app = express();
console.log(process.env.JWT_SECRET);
//middleware chain:
app.use(json());
app.use(morgan("dev"));
app.use(cors());
//http://localhost:8080/api/v1/users  



/* app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); */
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);  // הוספת הנתיב לעגלת הקניות
app.use(express.static("public"));
app.use(errorHandler);
app.use(notFound);

//start the server:
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`App is running in ${process.env.NODE_ENV} mode`);
});
