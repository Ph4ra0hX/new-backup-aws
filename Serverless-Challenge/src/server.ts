import express from "express";
import { router } from "./routes";

import swaggerUI from "swagger-ui-express";

import swaggerFile from "./swagger.json";

const connection = require("./database");

//const Employee = require("./database/model/Employee");
//Employee.sync({ force: true });

connection
  .authenticate()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3333, () => {
  console.log("⚡️ server ON");
});
