import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutosService) {
    }

    @Get()
    async buscaTodos(): Promise<Produto[]> {
        return this.produtosService.buscaTodos();
    }

    @Get(':id')
    async buscaUm(@Param('id') id: number): Promise<Produto> {
        return this.produtosService.buscaUm(id);
    }

    @Post()
    async cria(@Body() produto: Produto): Promise<Produto> {
        return this.produtosService.cria(produto);
    }

    @Put(':id')
    async atualiza(@Param('id') id: number, @Body() produto: Produto) {
        this.produtosService.atualiza(id, produto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        this.produtosService.remove(id);
    }
}