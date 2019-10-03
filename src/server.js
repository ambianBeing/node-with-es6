"use strict";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import {
  SERVER_PORT,
  CORS_OPTIONS,
  MORGAN_OPTIONS
} from "./constants/constants.js";
import logger from "./config/logs-config.js";
import { default as ownerRoutes } from "./routes/owners-routes.js";
import { default as petsRoutes } from "./routes/pets-routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(MORGAN_OPTIONS.customOption, { stream: logger.stream }));
app.use(cors(CORS_OPTIONS));

/*setup routes*/
app.use("/owners", ownerRoutes);
app.use("/pets", petsRoutes);

app.listen(SERVER_PORT, function() {
  console.info("Enviroment::", process.env.NODE_ENV);
  console.info(`node-rest-es6 listening on port::${SERVER_PORT}`);
});

export default app;
