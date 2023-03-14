import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminCreationAttrs{
    username: string;
    email: string;
    telegram_link: string;
};

@Table({tableName: 'admin'})
export class Admin extends Model<Admin, AdminCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    telegram_link: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hashed_password: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
    })
    is_active: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
    })
    is_creater: boolean;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    hashed_refresh_token: number;
}
