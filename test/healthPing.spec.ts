import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

describe('Health Ping', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({}).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('Health Ping endpoint should return 200', () => {
    return request(app.getHttpServer()).get('/health/ping').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
