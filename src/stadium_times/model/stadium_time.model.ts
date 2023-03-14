import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Orders } from "../../orders/models/order.model";
import { Stadium } from "../../stadiums/models/stadium.model";
import { Cart } from "../../cart/model/cart.model";

interface StadiumTimesCreationAttrs{
    start_time: Date;
    end_time: Date;
    price: number;
};

@Table({tableName: 'stadium_times'})
export class StadiumTimes extends Model<StadiumTimes, StadiumTimesCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Stadium)
    @Column({
        type: DataType.INTEGER
    })
    stadiumId: number;

    @Column({
        type: DataType.DATE
    })
    start_time: Date;

    @Column({
        type: DataType.DATE
    })
    end_time: Date;

    @Column({
        type: DataType.INTEGER
    })
    price: number;

    @HasMany(() => Orders)
    orders: Orders;

    @HasMany(() => Cart)
    cart: Cart;

    @BelongsTo(() => Stadium)
    user: Stadium;
}
