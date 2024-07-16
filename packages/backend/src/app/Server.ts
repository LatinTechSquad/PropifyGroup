import { json, urlencoded } from 'body-parser';
import express from 'express';
import type * as http from 'http';
import router from './routes';
import cors from 'cors';
import { invalidArgumentErrorHandler } from '../modules/Shared/infrastructure/api/invalidArgumentErrorHandler';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from '../../swagger_output.json';

export class Server {
  private readonly express: express.Express;
  private readonly port: string;
  private httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(cors());
    this.express.use(json());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(invalidArgumentErrorHandler);
    this.express.use('/v1', router);
    this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
  }

  async listen(): Promise<void> {
    await new Promise<void>((resolve) => {
      const env = this.express.get('env') as string;
      this.httpServer = this.express.listen(parseInt(this.port), '0.0.0.0', () => {
        console.log(`  Frontoffice Backend App is running at http://${process.env.DOMAIN}:${this.port}/v1 in ${env} mode`);
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer(): Server['httpServer'] {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this.httpServer != null) {
        this.httpServer.close((error) => {
          if (error != null) {
            reject(error);

            return;
          }

          resolve();
        });
      }

      resolve();
    });
  }
}
