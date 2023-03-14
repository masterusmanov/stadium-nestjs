import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Stadium } from "../../stadiums/models/stadium.model";
import { District } from "../../district/models/district.model";

interface RegionCreationAttrs{
    name: string;
};

@Table({tableName: 'region'})
export class Region extends Model<Region, RegionCreationAttrs> {
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

    @HasMany(() => District)
    district: District;

    @HasMany(() => Stadium)
    stadium: Stadium;
}
