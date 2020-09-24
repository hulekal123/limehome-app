let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

    describe('/GET properties', () => {
        it('it should GET properties', (done) => {
        chai.request('http://localhost:3080')
            .get('/api/properties')
            .query({lat: 2, long: 3, apiKey: 'NU6enez-BoXwzhlae5czA3JS8UzkTuDWg8cUtToWeME'})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.results.should.be.a('array');
                done();
            });
            });
        });


        describe('/POST bookings', () => {
            it('it should POST bookings', (done) => {
            chai.request('http://localhost:3080')
                .post('/api/bookings')
                .send({
                    "username" : "preeti",
                    "date": "12-02-2021",
                    "propertyId" : "123",
                    "title" : "jhasd"
                })
                .end((err, res) => {
                    console.log(res);
                    res.should.have.status(200);
                    res.body.should.have.property('_id');
                    res.body.should.have.property('username');
                    done();
                });
            });
        });


        describe('/GET bookings of property', () => {
            it('it should GET bookings of property', (done) => {
            chai.request('http://localhost:3080')
                .get('/api/123/bookings')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data[0].should.have.property('_id');
                    res.body.data[0].should.have.property('username');
                    done();
                });
            });
        });  