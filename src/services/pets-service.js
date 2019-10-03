"use strict";
import { default as ownersData } from "./../data/owners.json";
import { writeJsonData } from "./../utils/common-utils.js";

const addPet = (ownerId, petData) => {
  return new Promise((resolve, reject) => {
    if (ownersData.length === 0) {
      return reject({
        status: 200,
        message: "no data available"
      });
    } else {
      //finding owner
      const idx = ownersData.findIndex(e => e.id === parseInt(ownerId));

      if (idx === -1) {
        return reject({
          status: 200,
          message: "owner not found"
        });
      }

      //checking if this pet already exists
      /* const petExists = ownersData[idx]["owns"].findIndex(
        p => p.id == parseInt(petData.id)
      );

      if (petExists !== -1) {
        return reject({
          status: 200,
          message: "This pet for this owner already exists"
        });
      } */

      //updating the owners pet inplace
      ownersData[idx]["owns"].push(petData);

      //writing to file
      writeJsonData(ownersData)
        .then(result => {
          resolve(ownersData[idx]);
        })
        .catch(e => reject(e));
    }
  });
};

const editPet = (ownerId, petId, petData) => {
  return new Promise((resolve, reject) => {
    if (ownersData.length === 0) {
      return reject({
        status: 200,
        message: "no data available"
      });
    } else {
      //finding owner
      const idx = ownersData.findIndex(e => e.id === parseInt(ownerId));

      if (idx === -1) {
        return reject({
          status: 200,
          message: "owner not found"
        });
      }

      const pets = ownersData[idx]["owns"];

      //finding pet data to update
      const petIdx = pets.findIndex(p => p.id == parseInt(petId));

      if (petIdx === -1) {
        return reject({
          status: 200,
          message: "this pet for the owner not found"
        });
      }

      //replacing the whole pet object with incoming pet data
      ownersData[idx]["owns"][petIdx] = petData;

      //writing to file
      writeJsonData(ownersData)
        .then(result => {
          return resolve(ownersData[idx]);
        })
        .catch(e => reject(e));
    }
  });
};

export { addPet, editPet };
