let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../appHolContr");
const { response, resource } = require("../appHolContr");
const { eventDater, bookPlan } = require("../models");
var expect = chai.expect;
var should = chai.should();

chai.use(chaiHttp);

describe("unit test for Calender API", () => {




  describe("Check if the Get functional", () => {
    it("it should Get all the Calender Data", (done) => {
      chai.request(server)
        .get('/eventDater')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.should.have.length.above(0);
          done();
        });

        
    });
  });


    describe('GET all Endpoint', ()  =>{
        it('Test should allow receive all data from the database that is selected by their catergories', (done) =>{
            chai
            .request(server)
            .get('/eventDater')
            
            .end((err, response) => {
                expect(response).to.have.status(200);
                expect(response.body).to.be.an('array');
                response.body.forEach(eventDater => {
                    expect(eventDater).to.have.keys('id', 'Destination', 'StartDate', 'EndDate', 'Amount', 'bookPlan', 'bookPlan_id');
                   
                });
               done();
            });
        });
    })
    describe('GetOne Endpoint', ()  =>{
        it('The test allows to retrieve only one database with uniquer indetifer in ID 35', (done) =>{
            chai
            .request(server)
            .get('/eventDater/id/35')
            .end((err, response) => {
                // console.log(response.body.error.message);
                expect(response).to.have.status(200);
                expect(response.body).to.be.an('object');
                expect(response.body).to.have.keys('id', 'Destination', 'StartDate', 'EndDate', 'Amount', 'bookPlan_id');
               done();
            });
        });
    })
    describe('Creates new Endpoint', () => {
        var images;
        try{
            images = fs.readFileSync(process.cwd() + '/test/testing.jpg');

        }
        catch(e){
            console.log(e);
        }
        it('The test procced of creating new Event Date in the database' , (done) =>{
            const items = {
                id: '',
                Destination: 'Portugal',
                StartDate: '2023-04-03',
                EndDate: '2023-05-12',
                Amount: '32000',
                bookPlan_id: '1',
            };
            
            chai.request(server)
            .post('/eventDater')
            .field("Content-Type" , "multipart/form-data")
            .field(items)
            .attach('image',
             images, "testing.jpg")
             .end((err, response) =>{
                console.log(response.body.error.message);
                expect(response).to.have.status(201);
                expect(response.body).to.be.an('object');
                expect(response.body).to.have.keys('id', 'Destination', 'StartDate', 'EndDate', 'Amount', 'bookPlan_id');
                id = response.body.id;
                done();

             });
        });

        it('Test Should return an error if a field is missing', (done) => {
            const items = {
                id: '',
                Destination: 'Portugal',
                StartDate: '2023-04-03',
                EndDate: '2023-05-12',
                Amount: '32000',
                bookPlan_id: '1',
            }
            chai.request(server)
            .post('/eventDater')
            .send(items)
            .end((err, response) => {
                console.log(response.body.error.message);
                expect(response).to.have.status(400);
                expect(response.body).to.be.an('object');
                expect(response.body.message).to.equal('Missing required field: bookPlan_id');
                done();
            });
        });
        it('Test return an errror if the data of Date is greater than the End Date', (done) => {
            const items = {
                Destination: 'Portugal',
                StartDate: '2023-04-03',
                EndDate: '2023-04-01',
                Amount: '32000',
                bookPlan_id: '1',
            }
            chai.request(server)
            .post('/eventDater')
            .send(items)
            .end((err, response) => {
                expect(response).to.have.status(400);
                expect(response.body).to.be.an('object');
                expect(response.body.message).to.equal('Error make sure that the End date shouldnt greater than Start Date');
                done();
            });
        });
    })
    
//     describe("Get One Endpoint by ID", () => {
//         it("The test receive by getById", (done) =>{
//             const id = 35;
//       chai
//         .request(server)
//         .get("/eventDater/" + id)
//         .end((err, response) =>{
//           response.should.have.status(200);
//           response.body.should.be.a('object');
//           response.body.should.have.property('id');
//           response.body.should.have.property('Destination');
//           response.body.should.have.property('StartDate');
//           response.body.should.have.property('EndDate');
//           response.body.should.have.property('Amount');
//           response.body.should.have.property('id').eq(40);
//           done();
//         });
//     });
//     it("it should NOT GET a Dater by ID", (done) => {
//       const id = 123;
//       chai
//         .request(server)
//         .get("/eventDater/" + id)
//         .end((err, response) => {
//           response.should.have.status(400);
//           done();
//         });
//     });
//   }),
//   describe("Test the create function", () => {
//     it("it should POST a new Event Date", (done) => {
//       const eventDater = {
//         Destination: "Lithuania",
//         StartDate: "2023-01-19",
//         EndDate: "2023-04-25",
//         Amount: 22,
//         bookPlan_id: 4,
//       };
//       chai
//         .request(server)
//         .post("/eventDater")
//         .send(eventDater)
//         .end((err, response) => {
//           response.should.have.status(201);
//           response.body.should.be.a("object");
//           response.body.should.have.property('Destination').eq('Lithuania');
//           response.body.should.have.property('StartDate').eq('2023-01-19');
//           response.body.should.have.property('EndDate').eq('2023-04-25');
//           response.body.should.have.property('Amount').eq(22);
//           response.body.should.have.property('bookPlan_id').eq(2);
//           done();
//         });
//     });
//   });
})
