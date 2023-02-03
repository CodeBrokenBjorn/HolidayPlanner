let chai = require("chai");
let chaiHttp = require("chai-http");
const { type } = require("os");
let server = require("../appHolContr");
const { response, resource } = require("../appHolContr");
const { eventDater, bookPlan } = require("../models");
var expect = chai.expect;
var should = chai.should();
var eventDaterID;
var bookPlanID;

chai.use(chaiHttp);


describe("unit test for Calender API", () => {
  describe("Check if the Get functional", () => {
    it("it should Get all the Calender Data", (done) => {
      chai
        .request(server)
        .get("/eventDater")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.should.have.length.above(0);
          done();
        });
    });
  });

  describe("GetByAll test in Endpoints", () => {
    it("Test should allow receive all data from the database that is selected by their catergories", (done) => {
      chai
        .request(server)
        .get("/eventDater")
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.an("array");
          response.body.forEach((eventDater) => {
            expect(eventDater).to.have.keys(
              "id",
              "Destination",
              "StartDate",
              "EndDate",
              "Amount",
              "bookPlan",
              "bookPlan_id"
            );
          });
          done();
        });
    });
  }),
    describe("GetById test in Endpoint", () => {
      it("The test allows to retrieve only one database with unique indetifer in ID 36", (done) => {
        const id = 36;
        chai
          .request(server)
          .get("/eventDater/" + id)
          .end((err, response) => {
            console.log(typeof (response.body));
            expect(response).to.have.status(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.keys(
              "id",
              "Destination",
              "StartDate",
              "EndDate",
              "Amount",
              "bookPlan_id"
            );
            expect(response.body.id).to.equal(36);
            done();
          });
      });
    }),
    describe("Create EventDater Endpoint", () => {
      it("The test proceeds with creating a new EventDater in the database", (done) => {
        const eventDater = {
          Destination: "France",
          StartDate: "2023-04-03",
          EndDate: "2023-05-12",
          Amount: 32000,
          bookPlan_id: 1,
        };
        chai
          .request(server)
          .post("/eventDater")
          .send(eventDater)
          .end((err, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.be.an("object");
            expect(response.body.id).to.exist;
            eventDaterID = response.body.id
            expect(response.body)
              .to.have.property("Destination")
              .eq("France");
            expect(response.body)
              .to.have.property("StartDate")
              .eq("2023-04-03");
            expect(response.body).to.have.property("EndDate").eq("2023-05-12");
            expect(response.body).to.have.property("Amount").eq(32000);
            expect(response.body).to.have.property("bookPlan_id").eq(1);
            done();
          });
      });
      describe("Create with Invalid inputs", () => {
        it("Test Should return an error if an invalid input is provided", (done) => {
          const eventDater = {
            Destination: "Portugal",
            StartDate: "2025-04-31", // invalid date
            EndDate: "2023-05-12",
            Amount: 32000,
            bookPlan_id: 1,
          };
          chai
            .request(server)
            .post("/eventDater")
            .send(eventDater)
            .end((err, response) => {
              if (err) {
                done(err);
              }
              console.log(response.body.error);
              expect(response).to.have.status(400);
              expect(response.body).to.be.an("object");
              expect(response.body.error.message).to.deep.include(
                "Invalid date provided:"
              );
              done();
            });
        });
      });
      it("Test should return an error due to field not contaning require type", (done) => {
        const eventDater = {
          Destination: "France",
          StartDate: "2024-05-12",
          EndDate: "2024-05-12",
        };
        chai
          .request(server)
          .post("/eventDater")
          .send(eventDater)
          .end((err, response) => {
            expect(response).to.have.status(400);
            expect(response.body).to.be.an("object");
            expect(response.body.error.message).to.deep.equal(
              "Esseinatial fields missing"
            );
            done();
          });
      });
    });

  describe("Updates Endpoint", () => {
    it("The test allows to update certain data with unique identifier in ID 37", (done) => {
      const id = 37;
      const updatedData = {
        id: id,
        Destination: "Brazil",
        StartDate: "2024-05-01",
        EndDate: "2024-05-12",
        Amount: 35000,
      };
      chai
        .request(server)
        .put("/eventDater/")
        .send(updatedData)
        .end((err, response) => {
          if (err) {
            done(err);
          }
          expect(response).to.have.status(200);
          expect(response.body).to.be.an("object");
          expect(response.body)
            .to.have.property("Destination")
            .eq("Brazil");
          expect(response.body)
            .to.have.property("StartDate")
            .eq("2024-05-01");
          expect(response.body).to.have.property("EndDate").eq("2024-05-12");
          expect(response.body).to.have.property("Amount").eq(35000);
          done();
        });
      it("Test Should return an error if a field is missing", (done) => {
        const updatedData = {
          id: 35,
          Destination: "France",
          StartDate: "2024-05-12",
          EndDate: "2024-05-12",
          Amount: 35000,
        };
        chai
          .request(server)
          .put("/eventDater/" + eventDaterID)
          .send(updatedData)
          .end((err, response) => {
            if (err) {
              done(err);
            }
            console.log(response.body.error);
            expect(response).to.have.status(400);
            expect(response.body).to.be.an("object");
            expect(response.body.error.message).to.equal(
              "Missing required field: bookPlan_id"
            );
            done();
          });
      });
      it("Test Should return an error if an invalid date is provided in update", (done) => {
        const updatedData = {
          id: 35,
          Destination: "France",
          StartDate: "2024-05-32", // invalid information
          EndDate: "2024-05-12",
          Amount: 35000,
          bookPlan_id: 1,
        };
        chai
          .request(server)
          .put("/eventDater/")
          .send(updatedData)
          .end((err, response) => {
            if (err) {
              done(err);
            }
            console.log(response.body.error.message);
            expect(response).to.have.status(400);
            expect(response.body).to.be.an("object");
            expect(response.body.error.message).to.equal(
              "Invalid date provided: 2024-05-31"
            );
            done();
          });
      });
    });
  });
  describe('Delete the EndPoint', () => {
    it('The test should delete the eventDater, make sure to create field as that will cause error', (done) => {
      chai.request(server)
        .delete("/eventDater/" + eventDaterID)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.res.text).to.be.a('string');
          expect(response.res.text).to.deep.include("Item was deleted");
          done();
        });
    });
  });

});
