"use strict";
import * as controller from "./../controllers/pets-controller.js";
import express from "express";

const route = express.Router();

route.post("/add-pet/:ownerId", controller.addPet);

route.patch("/edit-pet/:ownerId/:id", controller.editPet);

export default route;
