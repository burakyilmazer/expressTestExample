const mongoose = require("mongoose");
const cfg = require('../../../configs/config');
const supertest = require("supertest");
const userModel = require('../../../models/user');
const app = require('../../../index');
const request = supertest(app);
describe('Create User', () => {
  beforeAll(async () => {
    try {
      connection = mongoose.connect(cfg.db, {useNewUrlParser: true, useUnifiedTopology: true});
      await userModel.deleteMany({});
    } catch (error) {
      console.log('error ', error.message);
    }
  });

  afterAll(async () => {
    app.close();
  })

  it('should create user', async (done) => {
    const params = {
      name: 'burak yılmazer',
      email: 'burak.yilmazer@mdpgroup.com',
      password: '123456'
    }
    const response = await request
      .post('/api/user')
      .send(params)
      .set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Kullanıcı Oluşturuldu');
    done();
  });
})