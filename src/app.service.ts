import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {
    this.sincronizaBancoDados();
  }

  async sincronizaBancoDados() {
    await this.sequelize.sync();
  }

  getHello(): string {
    return 'Olá NestJS Alura!';
  }
}
