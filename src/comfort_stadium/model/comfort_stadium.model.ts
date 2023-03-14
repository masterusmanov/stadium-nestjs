import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Stadium } from "../../stadiums/models/stadium.model";
import { Comfort } from "../../comfort/model/comfort.model";


@Table({tableName: 'comfort_stadium'})
export class ComfortStadium extends Model<ComfortStadium> {
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

    @ForeignKey(() => Comfort)
    @Column({
        type: DataType.INTEGER
    })
    comfortId: number;

    @BelongsTo(() => Stadium)
    stadium: Stadium;

    @BelongsTo(() => Comfort)
    comfort: Comfort;
}
