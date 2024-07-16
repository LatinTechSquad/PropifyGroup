import request from 'supertest';
import { Given, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import assert from 'assert';
import { BackendApp } from '../../../../src/app/BackendApp';
import { EnvironmentArranger } from '../../../modules/shared/infrastructure/EnvironmentArranger';
import { testContainer } from '../../../modules/shared/testContainer';

let _request: request.Test;
let application: BackendApp;
let _response: request.Response;

const environmentArranger: EnvironmentArranger = testContainer.resolve('PrismaEnvironmentArranger');

BeforeAll(async () => {
  await environmentArranger.arrange();
  application = new BackendApp();
  await application.start();
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

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be:', (expectedResponse: string) => {
  try {
    const expected = JSON.parse(expectedResponse);
    assert.deepStrictEqual(_response.body, expected);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to parse expected response JSON: ${error.message}`);
    } else {
      throw new Error('Failed to parse expected response JSON: unknown error');
    }
  }
});
