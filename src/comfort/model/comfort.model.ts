import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { ComfortStadium } from "../../comfort_stadium/model/comfort_stadium.model";


interface ComfortCreationAttrs{
    name: string;
};

@Table({tableName: 'comfort'})
export class Comfort extends Model<Comfort, ComfortCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @HasMany(() => ComfortStadium)
    comfortStadium: ComfortStadium;
}
