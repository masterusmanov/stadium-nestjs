import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { User_wallet } from "../../user_wallet/models/user_wallet.model";
import { StadiumTimes } from "../../stadium_times/model/stadium_time.model";
// import { Status } from "../../status/model/status.model";

interface OrdersCreationAttrs{
    date: Date;
};

@Table({tableName: 'orders'})
export class Orders extends Model<Orders, OrdersCreationAttrs> {
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
    st_times: number;

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
    user: Users;

    @BelongsTo(() => User_wallet)
    user_wallet: User_wallet;

    @BelongsTo(() => StadiumTimes)
    stadiumTimes: StadiumTimes;
}
