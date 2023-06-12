import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { User } from './user.types';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return '안녕';
  }

  getGoodbye(): string {
    return '잘가';
  }

  async getJsonData(): Promise<User[]> {
    const response = await firstValueFrom(
      this.httpService.get<User[]>(
        'https://jsonplaceholder.typicode.com/users',
      ),
    );
    return response.data;
  }
}
