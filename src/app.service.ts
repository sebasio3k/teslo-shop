import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // return 'Hello World!';
    return process.env.DB_HOST;
  }
}
