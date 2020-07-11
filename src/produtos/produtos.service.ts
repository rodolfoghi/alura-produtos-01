import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProdutosService {
    constructor(
        @InjectModel(Produto)
        private produtoModel: typeof Produto
    ) { }

    async buscaTodos(): Promise<Produto[]> {
        return this.produtoModel.findAll();
    }

    async buscaUm(id: number): Promise<Produto> {
        return this.produtoModel.findByPk(id);
    }

    async cria(produto: Produto): Promise<Produto> {
        return this.produtoModel.create(produto);
    }

    async atualiza(id: number, produto: Produto) {
        this.produtoModel.update(produto, {
            where: {
                id: id
            }
        })
    }

    async remove(id: number) {
        const produto =  await this.buscaUm(id);
        produto.destroy();
    }
}
