import { Column, DataType, Model, Table, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { Cart } from "../../cart/model/cart.model";


interface UsersCardCreationAttrs{
    name: string;
    phone: string;
    number: number;
    year: number;
    month: number;
};

@Table({tableName: 'user_cards'})
export class UsersCard extends Model<UsersCard, UsersCardCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER
    })
    userId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    number: number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    year: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    month: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_active: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_main: boolean;

    @HasMany(() => Cart)
    cart: Cart;

    @BelongsTo(() => Users)
    users: Users;
}
