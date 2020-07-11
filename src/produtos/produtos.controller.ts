import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
    private produtos: any[] = [];

    constructor() {
        this.produtos.push({ id: 1, codigo: 'CNTAZ', nome: 'Caneta Azul', perco: 1.99 });
        this.produtos.push({ id: 2, codigo: 'CNTPR', nome: 'Caneta Preta', perco: 2.99 });
    }

    @Get()
    async buscaTodos(): Promise<any[]> {
        return this.produtos;
    }

    @Get(':id')
    async buscaUm(@Param('id') id: number): Promise<any> {
        return this.produtos.filter(x => x.id == id)[0];
    }

    @Post()
    async cria(@Body() produto): Promise<any> {
        produto.id = this.produtos.length + 1;
        this.produtos.push(produto);
        return produto;
    }

    @Put(':id')
    async atualiza(@Param('id') id: number, @Body() produto) {
        const produtoExistente = this.produtos.find(e => e.id == id);
        const index: number =  this.produtos.indexOf(produtoExistente);
        this.produtos[index] = produto;
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        this.produtos = this.produtos.filter(x => x.id != id);
    }
}