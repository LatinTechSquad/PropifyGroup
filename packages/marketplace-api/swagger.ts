import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v1.0.0',
    title: 'PropifyGroup API Documentation',
    description: 'Documentation for the PropifyGroup API',
  },
  servers: [
    {
      url: 'http://localhost:3002',
      description: 'Local development server',
    },
    {
      url: 'https://api.propifygroup.com',
      description: 'Production server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      CreateUserRequest: {
        id: 'string',
        firstname: 'string',
        lastname: 'string',
        email: 'string',
        password: 'string',
        phone: 'string',
      },
      UpdateUserRequest: {
        firstname: 'string',
        lastname: 'string',
        email: 'string',
        password: 'string',
        phone: 'string',
      },

      LoginRequest: {
        email: 'string',
        password: 'string',
      },
      CreateRoleRequest: {
        id: 'string',
        name: 'string',
        state: 'string',
      },
      UpdateRoleRequest: {
        name: 'string',
        state: 'string',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app/Server.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
