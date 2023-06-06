const request = require('supertest');
const app = require('./app');

describe('GET /products', function () {
  it('responds with json', function (done) {
    request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /products', function () {
  it('responds with json', function (done) {
    const product = {
      name: 'Camiseta',
      description: 'Camiseta de algodón',
      price: 10.99,
      quantity: 50,
    };
    request(app)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done);
  });
});
