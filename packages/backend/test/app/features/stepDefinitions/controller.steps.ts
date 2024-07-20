import { After, Before, BeforeAll, AfterAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import assert from 'assert';
import { BackendApp } from '../../../../src/app/BackendApp';
import { EnvironmentArranger } from '../../../modules/shared/infrastructure/EnvironmentArranger';
import { testContainer } from '../../../modules/shared/testContainer';

let _request: request.Test;
let application: BackendApp;
let _response: request.Response;
let userId: string;

const environmentArranger: EnvironmentArranger = testContainer.resolve('PrismaEnvironmentArranger');

BeforeAll(async () => {
  await environmentArranger.arrange();
  application = new BackendApp();
  await application.start();
});

Before(async function () {
  if (application.httpServer) {
    await request(application.httpServer).post('/v1/users').send({
      id: 'd7cd6582-7010-48e3-aab4-c1b69d38c513',
      firstname: 'test',
      lastname: 'test',
      email: 'test@test.cos',
      password: 'test12345',
      phone: '1234567898',
    });
    userId = 'd7cd6582-7010-48e3-aab4-c1b69d38c513'; // Guardar el ID del usuario creado
  }
});

After(async function () {
  if (userId) {
    await request(application.httpServer as any).delete(`/v1/users/${userId}`);
  }
});

AfterAll(async () => {
  await environmentArranger.arrange();
  await environmentArranger.close();
  await application.stop();
});

Given('I send a GET request to {string}', (route: string) => {
  if (application.httpServer) {
    _request = request(application.httpServer).get(route);
  }
});

Given('I send a POST request to {string} with body:', (route: string, body: string) => {
  if (application.httpServer) {
    _request = request(application.httpServer)
      .post(route)
      .send(JSON.parse(body) as object);
  }
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  if (application.httpServer) {
    _request = request(application.httpServer)
      .put(route)
      .send(JSON.parse(body) as object);
  }
});

Given('I send a DELETE request to {string}', (route: string) => {
  if (application.httpServer) {
    _request = request(application.httpServer).delete(route);
  }
});

Then('the response status code should be {int}', async function (status: number) {
  _response = await _request.expect(status);
});

Then('the response should be:', function (expectedResponse: string) {
  try {
    const expected = JSON.parse(expectedResponse);
    const actual = _response.body;

    if (expected.data !== undefined && Array.isArray(expected.data) && actual.data !== undefined && Array.isArray(actual.data)) {
      const sortById = (a: any, b: any) => a.id.localeCompare(b.id);
      expected.data.sort(sortById);
      actual.data.sort(sortById);
    }

    assert.strictEqual(actual.succesed, expected.succesed);
    assert.strictEqual(actual.code, expected.code);
    assert.strictEqual(actual.status_code, expected.status_code);

    if (expected.data !== undefined) {
      assert.deepStrictEqual(actual.data, expected.data);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to parse expected response JSON: ${error.message}`);
    } else {
      throw new Error('Failed to parse expected response JSON: unknown error');
    }
  }
});
