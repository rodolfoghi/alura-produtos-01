import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
    private produtos: Produto[] = [];

    constructor() {
        this.produtos.push({ id: 1, codigo: 'CNTAZ', nome: 'Caneta Azul', preco: 1.99 });
        this.produtos.push({ id: 2, codigo: 'CNTPR', nome: 'Caneta Preta', preco: 2.99 });
    }

    @Get()
    async buscaTodos(): Promise<Produto[]> {
        return this.produtos;
    }

    @Get(':id')
    async buscaUm(@Param('id') id: number): Promise<Produto> {
        return this.produtos.filter(x => x.id == id)[0];
    }

    @Post()
    async cria(@Body() produto: Produto): Promise<Produto> {
        produto.id = this.produtos.length + 1;
        this.produtos.push(produto);
        return produto;
    }

    @Put(':id')
    async atualiza(@Param('id') id: number, @Body() produto: Produto) {
        const produtoExistente = this.produtos.find(e => e.id == id);
        const index: number =  this.produtos.indexOf(produtoExistente);
        this.produtos[index] = produto;
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        this.produtos = this.produtos.filter(x => x.id != id);
    }
}