"use strict";
import { default as ownersData } from "./../data/owners.json";

const getListOfOwners = () => {
  return new Promise((resolve, reject) => {
    if (ownersData.length === 0) {
      reject({
        status: 200,
        message: "no data available"
      });
    } else {
      resolve(ownersData);
    }
  });
};

const getOwnerAndPets = id => {
  return new Promise((resolve, reject) => {
    if (ownersData.length === 0) {
      reject({
        status: 200,
        message: "no data available"
      });
    }

    const owner = ownersData.filter(e => e.id === parseInt(id));
    if (owner.length === 0) {
      reject({
        status: 200,
        message: `no owner available with id ${id}`
      });
    }

    resolve(owner);
  });
};

export { getListOfOwners, getOwnerAndPets };
