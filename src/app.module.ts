import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutosService } from './produtos/produtos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from './produtos/produto.model';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [Produto],
    }),
    SequelizeModule.forFeature([Produto]),
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
