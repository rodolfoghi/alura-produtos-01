import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
    private produtos: Produto[] = [];

    constructor() {
        this.produtos.push({ id: 1, codigo: 'CNTAZ', nome: 'Caneta Azul', preco: 1.99 });
        this.produtos.push({ id: 2, codigo: 'CNTPR', nome: 'Caneta Preta', preco: 2.99 });
    }

    async buscaTodos(): Promise<Produto[]> {
        return this.produtos;
    }

    async buscaUm(id: number): Promise<Produto> {
        return this.produtos.filter(x => x.id == id)[0];
    }

    async cria(produto: Produto): Promise<Produto> {
        produto.id = this.produtos.length + 1;
        this.produtos.push(produto);
        return produto;
    }

    async atualiza(id: number, produto: Produto) {
        const produtoExistente = this.produtos.find(e => e.id == id);
        const index: number =  this.produtos.indexOf(produtoExistente);
        this.produtos[index] = produto;
    }

    async remove(id: number) {
        this.produtos = this.produtos.filter(x => x.id != id);
    }
}
