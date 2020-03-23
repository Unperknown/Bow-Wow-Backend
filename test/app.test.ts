import * as request from 'supertest';
import app from '../src/app';

describe('Bow-Wow Server', () => {
  describe('Server works', () => {
    it('When it started', async () => {
      const response = await request(app.callback()).get('/graphql');

      expect(response.status).toBe(200);
    });
  });
  describe('MongoDB works', () => {
    it('When it started', async () => {
      const response = await request(app.callback()).get('/graphql');

      expect(response.status).toBe(200);
    });
  });
  describe('GraphQL works', () => {
    it('When it started', async () => {
      const response = await request(app.callback()).get('/graphql');

      expect(response.status).toBe(200);
    });
  });
});