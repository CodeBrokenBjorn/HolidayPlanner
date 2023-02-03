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

describe("unit test for bookPlan", () => {

    describe("Check if the Get functional", () => {
      it("it should Get all the BookPlan Data", (done) => {
        chai
          .request(server)
          .get("/bookPlan")
          .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a("array");
            response.body.should.have.length.above(0);
            done();
          });
      });
    });
  
  
    describe("GetById test in Endpoint", () => {
      it("The test allows to retrieve only one database with uniquer indetifer in ID 1 in bookPlan", (done) => {
        const id = 1;
        chai
          .request(server)
          .get("/bookPlan/" + id)
          .end((err, response) => {
            expect(response).to.have.status(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.keys(
              "id",
              "title",
              "body",
              "images",
            );
            expect(response.body.id).to.equal(1);
            done();
          });
      });
  
  
    }),
      describe("Create bookPlan Endpoint", () => {
        it("The test proceeds with creating a new bookPlan in the database", (done) => {
          const bookPlan = {
            title: "Trip to France quite wonderful trip I wish able to go there more often",
            body: "I just wish I am able to stay longer there kinda disapointed that couldn't"
          };
          chai
            .request(server)
            .post("/bookPlan")
            .send(bookPlan)
            .end((err, response) => {
              expect(response).to.have.status(201);
              expect(response.body).to.be.an("object");
              expect(response.body).to.have.all.keys("id", "title", "body", "image")
              expect(response.body.title).to.deep.equal("Trip to France quite wonderful trip I wish able to go there more often");
              expect(response.body.body).to.deep.equal("I just wish I am able to stay longer there kinda disapointed that couldn't");
              done();
            });
        });
        it("The test proceeds with creating a new BookDater in the database", (done) => {
          const bookPlan = {
            title: "Trip to France quite wonderful trip I wish able to go there more often",
            body: "I just wish I am able to stay longer there kinda disapointed that couldn't"
          };
          chai
            .request(server)
            .post("/bookPlan")
            .send(bookPlan)
            .end((err, response) => {
              expect(response).to.have.status(201);
              expect(response.body).to.be.an("object");
              expect(response.body).to.have.all.keys("id", "title", "body", "image")
              bookPlanID = response.body.id
              expect(response.body.title).to.deep.equal("Trip to France quite wonderful trip I wish able to go there more often");
              expect(response.body.body).to.deep.equal("I just wish I am able to stay longer there kinda disapointed that couldn't");
              done();
            });
        });
      });
    describe("GetByAll test in Endpoints", () => {
      it("Test should allow receive all data from the database that is selected by their catergories", (done) => {
        chai
          .request(server)
          .get("/bookPlan")
  
          .end((err, response) => {
            expect(response).to.have.status(200);
            expect(response.body).to.be.an("array");
            response.body.forEach((eventDater) => {
              expect(eventDater).to.have.keys(
                "id",
                "title",
                "body",
                "images",
              );
            });
            done();
          });
      });
    }),
      describe("Updates Endpoint", () => {
        it("The test should allow user to update in BookPlan by ID 32", (done) => {
          
          const updatedData = {
            id: bookPlanID,
            title: "Update test",
            body: "success"
          };
          chai
            .request(server)
            .put("/bookPlan/")
            .send(updatedData)
            .end((err, response) => {
                console.log(response.body, response?.res)
              if (err) {
                done(err);
              }
              expect(response).to.have.status(200);
              expect(response.body).to.be.an("object");
              expect(response.body).to.have.all.keys("title", "body", "image")
              expect(response.body.title).to.deep.equal("Update test")
              expect(response.body.body).to.deep.equal("success")
              done();
            });
        });
      })
    describe('Delete the EndPoint', () => {
      it('The test should delete the field, make sure to create field as that will cause error', (done) => {
        chai.request(server)
          .delete("/bookPlan/" + bookPlanID)
          .end((err, response) => {
            expect(response).to.have.status(200);
            expect(response.res.text).to.be.a('string');
            expect(response.res.text).to.deep.include("Item was deleted");
            done();
          });
      });
    })
  
  });
  