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
const TEST_OWNER = {
  id: OWNER_ID,
  name: "Peter Parker",
  address: "54 C Queens Avenue, California USA",
  phone: "+98-9716542432",
  email: "pepa@gmail.com",
  owns: [
    { id: 1, type: 1, name: "shadow", age: 13, colour: "brown" },
    { id: 55, type: 2, name: "silly", age: 2, colour: "black" },
    { id: 4, type: 1, name: "catawesome", age: 4, colour: "white" }
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};

/*Owners APIs test suites*/
describe("OWNERS APIs", () => {
  describe("GET /owners/list-owners/", () => {
    it("Should get list of owners or an empty array", done => {
      chai
        .request(app)
        .get("/owners/list-owners/")
        .end((err, res) => {
          if (err) done(err);
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

  describe("GET /owners/owner-details/:id", () => {
    it("Should get the owner details with a correct id and list of pets", done => {
      //creating a dummy user
      before(async function() {
        const d = await writeJsonData([TEST_OWNER]);
      });

      chai
        .request(app)
        .get(`/owners/owner-details/${OWNER_ID}`)
        .end((err, res) => {
          if (err) done(err);
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
