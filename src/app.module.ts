import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutosService } from './produtos/produtos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from './produtos/produto.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'alura',
      password: 'admin123',
      database: 'alura_produtos01',
      models: [Produto],
    }),
    SequelizeModule.forFeature([Produto]),
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
