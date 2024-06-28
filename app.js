import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import router from "./route/route.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 6000;
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

//Routes
app.use("/", router);

//Start Server
Connection.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is now running on this port http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database!!", err);
  });
