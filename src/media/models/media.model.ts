import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Stadium } from "../../stadiums/models/stadium.model";


interface MediaCreateAttr{
    photo: string;
    description: string;
}

@Table({tableName: 'media'})
export class Media extends Model<Media, MediaCreateAttr>{
    
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Stadium)
    @Column({
        type: DataType.INTEGER,
    })
    stadiumId: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    photo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @BelongsTo(() => Stadium)
    stadium: Stadium;
}