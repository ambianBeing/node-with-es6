"use strict";
import app from "./../src/server.js";
import chai from "chai";
import chaiHttp from "chai-http";
const expect = chai.expect;
const should = chai.should();
import { default as datastore } from "./../src/data/owners.json";
import { writeJsonData } from "./../src/utils/common-utils.js";
chai.use(chaiHttp);

const OWNER_ID =
  datastore.length > 0 ? datastore[datastore.length - 1]["id"] : 1;

const PET_ID =
  datastore.length > 0 && datastore[datastore.length - 1]["owns"].length > 0
    ? datastore[datastore.length - 1]["owns"][
        datastore[datastore.length - 1]["owns"].length - 1
      ]["id"]
    : 0;

const TEST_OWNER = {
  id: OWNER_ID,
  name: "Peter Parker",
  address: "56th Street Andheri Mumbai, India",
  phone: "+98-9319442432",
  email: "pepa@gmail.com",
  owns: [],
  createdAt: new Date(),
  updatedAt: new Date()
};

const TEST_PET = {
  id: PET_ID,
  type: 2,
  name: "bruno",
  age: 2,
  colour: "white"
};

const TEST_OWNER_EDIT = {
  id: OWNER_ID,
  name: "Billiard Mask",
  address: "70th 4A Avenue, Newyork USA",
  phone: "+98-9719442432",
  email: "billmask@gmail.com",
  owns: [TEST_PET],
  createdAt: new Date(),
  updatedAt: new Date()
};

const TEST_PET_EDIT = {
  id: PET_ID,
  type: 2,
  name: "bruno",
  age: 3,
  colour: "ivory"
};

/*Pets APIs test suites*/
describe("PETS APIs", () => {
  describe("POST /pets/add-pet/:ownerId", () => {
    //creating a dummy user
    before(async function() {
      await writeJsonData([TEST_OWNER]);
    });

    it("Should add a pet to an owner", done => {
      chai
        .request(app)
        .post(`/pets/add-pet/${OWNER_ID}`)
        .send(TEST_PET)
        .end((err, res) => {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body).to.have.all.keys("isError", "errMsg", "payload");
          expect(res.body)
            .to.have.property("isError")
            .equals(false);
          done();
        });
    });
  });

  describe("PATCH /pets/edit-pet/:ownerId/:id", () => {
    //creating a dummy user
    before(async function() {
      await writeJsonData([TEST_OWNER_EDIT]);
    });

    it("Should edit a pet to an owner", done => {
      chai
        .request(app)
        .patch(`/pets/edit-pet/${OWNER_ID}/${PET_ID}`)
        .send(TEST_PET_EDIT)
        .end((err, res) => {
          if (err) throw err;
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body).to.have.all.keys("isError", "errMsg", "payload");
          expect(res.body)
            .to.have.property("isError")
            .equals(false);
          done();
        });
    });
  });
});
