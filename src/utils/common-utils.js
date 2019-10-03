"use strict";
import * as fs from "fs";
import { DEFAULT_ENCODING } from "./../constants/constants.js";
const JSON_STORE = process.cwd() + "/src/data/owners.json";

const checkEmptyObj = ob =>
  Object.entries(ob).length === 0 && ob.constructor === Object;

const checkForInteger = val => Number.isInteger(val);

const checkForPositiveInt = val => {
  if (isNaN(val)) {
    return false;
  } else {
    val = +val;
    return Number.isInteger(val) && val > 0;
  }
};

const writeJsonData = payload => {
  const content = JSON.stringify(payload);
  return new Promise(function(resolve, reject) {
    fs.writeFile(JSON_STORE, content, DEFAULT_ENCODING, error => {
      if (error) reject(error);
      else resolve("success");
    });
  });
};

export { checkEmptyObj, checkForInteger, checkForPositiveInt, writeJsonData };
