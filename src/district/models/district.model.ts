import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Region } from "../../region/model/region.region";


interface DistrictCreationAttrs{
    name: string;
};

@Table({tableName: 'district'})
export class District extends Model<District, DistrictCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    impression: string;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER
    })
    regionId: number;

    @BelongsTo(() => Region)
    region: Region;

}
