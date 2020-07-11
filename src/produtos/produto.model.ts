import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Produto extends Model<Produto> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    preco: number;
}