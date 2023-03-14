import { Column, DataType, Model, Table, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Categories } from "../../categories/model/category.model";
import { Region } from "../../region/model/region.region";
import { District } from "../../district/models/district.model";
import { ComfortStadium } from "../../comfort_stadium/model/comfort_stadium.model";
import { Media } from "../../media/models/media.model";
import { Comments } from "../../comments/models/comment.model";
import { Users } from "../../users/models/user.model";

interface StadiumCreationAttrs{
    contact_with: string;
    name: string;
    volume: string;
    address: string;
    location: string;
    buildAt: Date;
    start_time: string;
    end_time: string;
};

@Table({tableName: 'stadium'})
export class Stadium extends Model<Stadium, StadiumCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Categories)
    @Column({
        type: DataType.INTEGER
    })
    categoryId: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER
    })
    ownerId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    contact_with: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    volume: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER
    })
    regionId: number;

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER
    })
    districtId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    buildAt: Date;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    start_time: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    end_time: string;

    @HasMany(() => ComfortStadium)
    comfortStadium: ComfortStadium;

    @HasMany(() => Media)
    media: Media;

    @HasMany(() => Comments)
    comments: Comments;

    @BelongsTo(() => Users)
    users: Users;

    @BelongsTo(() => Region)
    region: Region;

    @BelongsTo(() => District)
    district: District;
}
