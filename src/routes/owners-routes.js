"use strict";
import * as controller from "./../controllers/owners-controller.js";
import express from "express";

const route = express.Router();

route.get("/list-owners", controller.getListOfOwners);

route.get("/owner-details/:id", controller.getOwnerAndPets);

/*This route takes care of params in form of query string*/
route.get("/owner-details/", controller.getOwnerAndPets);

export default route;
