import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Users } from "src/users/models/user.model";
import { Orders } from "src/orders/models/order.model";

interface User_walletCreationAttrs{
    wallet: number;
};

@Table({tableName: 'user_wallet'})
export class User_wallet extends Model<User_wallet, User_walletCreationAttrs> {
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
        type: DataType.INTEGER
    })
    wallet: number;

    @BelongsTo(() => Users)
    user: Users;

    @HasMany(() => Orders)
    order: Orders;
}
