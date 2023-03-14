import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { Stadium } from "../../stadiums/models/stadium.model";


interface CommentsCreationAttrs{
    name: string;
};

@Table({tableName: 'comments'})
export class Comments extends Model<Comments, CommentsCreationAttrs> {
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

    @ForeignKey(() => Stadium)
    @Column({
        type: DataType.INTEGER
    })
    stadiumId: number;

    @Column({
        type: DataType.STRING
    })
    impression: string;

    @BelongsTo(() => Users)
    users: Users;

    @BelongsTo(() => Stadium)
    categories: Stadium;
}
