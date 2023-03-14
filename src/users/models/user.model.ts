import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { User_wallet } from "../../user_wallet/models/user_wallet.model";
import { Stadium } from "../../stadiums/models/stadium.model";
import { Comments } from "../../comments/models/comment.model";
import { UsersCard } from "../../user_cards/model/user_card.model";


interface UsersCreationAttrs{
    first_name: string;
    last_name: string;
    username: string;
    telegram_link: string;
    email: string;
    phone: string;
    birth_day: string;

};

@Table({tableName: 'users'})
export class Users extends Model<Users, UsersCreationAttrs> {
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
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    telegram_link: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

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

    @HasMany(() => User_wallet)
    user_walet: User_wallet;

    @HasMany(() => Stadium)
    stadium: Stadium;

    @HasMany(() => UsersCard)
    userscard: UsersCard;

    @HasMany(() => Comments)
    comments: Comments;
}
