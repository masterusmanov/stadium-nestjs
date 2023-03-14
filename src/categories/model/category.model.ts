import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { Stadium } from "../../stadiums/models/stadium.model";


interface CategoriesCreationAttrs{
    name: string;
};

@Table({tableName: 'categories'})
export class Categories extends Model<Categories, CategoriesCreationAttrs> {
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

    @ForeignKey(() => Categories)
    @Column({
        type: DataType.INTEGER
    })
    parentId: number;

    @HasMany(() => Stadium)
    stadium: Stadium;

    @BelongsTo(() => Categories)
    categories: Categories;
}
