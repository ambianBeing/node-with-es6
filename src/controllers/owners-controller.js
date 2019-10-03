"use strict";
import * as service from "./../services/owners-service.js";
import logger from "./../config/logs-config.js";
import { checkForPositiveInt } from "./../utils/common-utils.js";

const getListOfOwners = async (req, res, next) => {
  let vaildation = true;
  let errorStatus = null;
  try {
    if (vaildation) {
      const result = await service.getListOfOwners();
      return res.status(200).send({
        isError: false,
        errMsg: null,
        payload: result
      });
    }
  } catch (error) {
    errorStatus = error.status;
    logger.error(`At owners-controller:getListOfOwners()::${error}`);

    return res.status(errorStatus || 500).send({
      isError: true,
      errMsg: error.message,
      payload: []
    });
  }
};

const getOwnerAndPets = async (req, res, next) => {
  let vaildation = false;
  let errorStatus = null;
  try {
    /*1.validate the params passed*/
    const onwerId = req.query.id || req.params.id;
    if (onwerId) {
      if (!checkForPositiveInt(onwerId)) {
        errorStatus = 400;
        throw Error("owner id in request param is not valid positve integers");
      } else {
        vaildation = true;
      }
    } else {
      errorStatus = 400;
      throw Error("request id is not valid");
    }

    if (vaildation) {
      const result = await service.getOwnerAndPets(onwerId);
      return res.status(200).send({
        isError: false,
        errMsg: null,
        payload: result
      });
    }
  } catch (error) {
    errorStatus = error.status;
    logger.error(`At owners-controller:getOwnerAndPets()::${error}`);

    return res.status(errorStatus || 500).send({
      isError: true,
      errMsg: error.message,
      payload: []
    });
  }
};

export { getListOfOwners, getOwnerAndPets };
