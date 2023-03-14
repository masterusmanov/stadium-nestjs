import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { User_wallet } from "../../user_wallet/models/user_wallet.model";
import { Users } from "../../users/models/user.model";
import { Status } from "../../status/model/status.model";
import { StadiumTimes } from "../../stadium_times/model/stadium_time.model";

interface CartCreationAttrs{
    date: Date;
    time_for_clear: Date;
};

@Table({tableName: 'cart'})
export class Cart extends Model<Cart, CartCreationAttrs> {
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

    @ForeignKey(() => User_wallet)
    @Column({
        type: DataType.INTEGER
    })
    user_walletId: number;

    @ForeignKey(() => StadiumTimes)
    @Column({
        type: DataType.INTEGER
    })
    stadium_timesId: number;

    @Column({
        type: DataType.DATE
    })
    date: Date;

    // @ForeignKey(() => Status)
    @Column({
        type: DataType.INTEGER
    })
    statusId: number;
    
    @BelongsTo(() => Users)
    users: Users;

    @BelongsTo(() => User_wallet)
    user_wallet: User_wallet;

    @BelongsTo(() => StadiumTimes)
    orders: StadiumTimes;

    // @BelongsTo(() => Status)
    // cart: Status;
}
