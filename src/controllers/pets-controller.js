import { checkEmptyObj, checkForPositiveInt } from "./../utils/common-utils.js";
import * as service from "./../services/pets-service.js";
import logger from "./../config/logs-config.js";

const addPet = async (req, res, next) => {
  let vaildation = false;
  let errorStatus = null;
  try {
    //1.Validating the params in request body
    const param = req.params;
    const payload = req.body;

    if (!param || !payload) {
      errorStatus = 400;
      throw Error("Invalid query param or body");
    }

    if (checkEmptyObj(payload) || !checkForPositiveInt(param["ownerId"])) {
      errorStatus = 400;
      throw Error("Either owner id is not postive integer or pet data empty");
    } else {
      vaildation = true;
    }
    //2.If validation passed call service
    if (vaildation) {
      const result = await service.addPet(param["ownerId"], payload);
      return res.status(200).send({
        isError: false,
        errMsg: null,
        payload: result
      });
    }
  } catch (error) {
    errorStatus = error.status;
    logger.error(`At pets-controller:addPet()::${JSON.stringify(error)}`);

    return res.status(errorStatus || 500).send({
      isError: true,
      errMsg: error.message,
      payload: []
    });
  }
};

const editPet = async (req, res, next) => {
  let vaildation = false;
  let errorStatus = null;
  try {
    //1.Validating the params in request body
    const param = req.params;
    const payload = req.body;

    if (!param || !payload) {
      errorStatus = 400;
      throw Error("Invalid query param or body");
    }

    if (
      checkEmptyObj(payload) ||
      !checkForPositiveInt(param["ownerId"]) ||
      !checkForPositiveInt(param["id"])
    ) {
      errorStatus = 400;
      throw Error(
        "Either owner id or pet id is not postive integer, or pet data empty"
      );
    } else {
      vaildation = true;
    }

    //2.If validation passed call service
    if (vaildation) {
      const result = await service.editPet(
        param["ownerId"],
        param["id"],
        payload
      );
      return res.status(200).send({
        isError: false,
        errMsg: null,
        payload: result
      });
    }
  } catch (error) {
    errorStatus = error.status;
    logger.error(`At pets-controller:editPet()::${JSON.stringify(error)}`);

    return res.status(errorStatus || 500).send({
      isError: true,
      errMsg: error.message,
      payload: []
    });
  }
};

export { addPet, editPet };
