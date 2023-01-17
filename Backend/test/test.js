let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../appHolContr");
const { response, resource } = require("../appHolContr");
const { eventDater, bookPlan } = require("../models");
var expect = chai.expect;
var should = chai.should();
var id;

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
      it("The test allows to retrieve only one database with uniquer indetifer in ID 35", (done) => {
        chai
          .request(server)
          .get("/eventDater/id/35")
          .end((err, response) => {
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
            expect(response.body.id).to.equal(35);
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
          .post("/eventDater/")
          .send(eventDater)
          .end((err, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.be.an("object");
            expect(response.body)
              .to.have.property("Destination")
              .eq("Portugal");
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
        it("Test Should return an error if an invalid date is provided", (done) => {
          const eventDater = {
            Destination: "Portugal",
            StartDate: "2025-04-31", // invalid date
            EndDate: "2023-05-12",
            Amount: 32000,
            bookPlan_id: 1,
          };
          chai
            .request(server)
            .post("/eventDater/")
            .send(eventDater)
            .end((err, response) => {
              if (err) {
                done(err);
              }
              console.log(response.body.error);
              expect(response).to.have.status(400);
              expect(response.body).to.be.an("object");
              expect(response.body.error).to.equal(
                "Invalid date provided: 2023-04-31"
              );
              done();
            });
        });
      });
      it("Test return an error if the data of Date is greater than the End Date", (done) => {
        const eventDater = {
          Destination: "Portugal",
          StartDate: "2023-04-03",
          EndDate: "2023-04-01",
          Amount: 32000,
          bookPlan_id: 1,
        };
        chai
          .request(server)
          .post("/eventDater/")
          .send(eventDater)
          .end((err, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.be.an("object");
            expect(response.body.error && response.body.error.message).to.equal(
              "Error make sure that the End date shouldnt greater than Start Date"
            );
            done();
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
            expect(response.body.error).to.equal(
              "Missing required Field: Amount, bookPlan_id"
            );
            done();
          });
      });
    });

  describe("Updates Endpoint", () => {
    it("The test allows to update certain data with unique identifier in ID 1", (done) => {
      const updatedData = {
        Destination: "Brazil",
        StartDate: "2024-05-01",
        EndDate: "2024-05-12",
        Amount: "35000",
        bookPlan_id: 1,
      };
      chai
        .request(server)
        .put("/eventDater/id/100")
        .send(updatedData)
        .end((err, response) => {
          if (err) {
            done(err);
          }
          expect(response).to.have.status(200);
          expect(response.body).to.be.an("object");
          expect(response.body.Destination).to.equal(updatedData.Destination);
          expect(response.body.StartDate).to.equal(updatedData.StartDate);
          expect(response.body.EndDate).to.equal(updatedData.EndDate);
          expect(response.body.Amount).to.equal(updatedData.Amount);
          expect(response.body.bookPlan_id).to.equal(updatedData.bookPlan_id);
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
          .put("/eventDater/id/35")
          .send(updatedData)
          .end((err, response) => {
            if (err) {
              done(err);
            }
            console.log(response.body.error);
            expect(response).to.have.status(400);
            expect(response.body).to.be.an("object");
            expect(response.body.error).to.equal(
              "Missing required field: bookPlan_id"
            );
            done();
          });
      });
      it("Test Should return an error if an invalid date is provided in update", (done) => {
        const updatedData = {
          id: 35,
          Destination: "France",
          StartDate: "2024-05-31", // invalid information
          EndDate: "2024-05-12",
          Amount: 35000,
          bookPlan_id: 1,
        };
        chai
          .request(server)
          .put("/eventDater/id/1")
          .send(updatedData)
          .end((err, response) => {
            if (err) {
              done(err);
            }
            console.log(response.body.error.message);
            expect(response).to.have.status(400);
            expect(response.body).to.be.an("object");
            expect(response.body.error).to.equal(
              "Invalid date provided: 2024-05-31"
            );
            done();
          });
      });
    });
    describe('Delete the EndPoint', ()=> {
        it('The test should delete the field', (done) => {
            chai.request(server)
            .delete("/eventDater/id/35")
            .end((err, response) => {
                expect(response).to.have.status(200);
                expect(response.body).to.be.a('string');
                expect(response.body).to.deep.equal("eventDater Was Deleted");
                done();
            })
        })
    })
  });
});
