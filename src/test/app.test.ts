import 'mocha';

import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/app';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Bow-Wow Server', () => {
  describe('Server works', () => {
    it('When it started', async () => {
      chai.request(app.callback())
        .get('/graphql')
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
    });
  });
  describe('MongoDB works', () => {
    it('When it started', async () => {
      chai.request(app.callback())
        .get('/graphql')
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
    });
  });
  describe('GraphQL works', () => {
    it('When it started', async () => {
      chai.request(app.callback())
        .get('/graphql')
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});