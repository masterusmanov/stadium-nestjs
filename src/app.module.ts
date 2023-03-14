import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from "path";
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { OrdersModule } from './orders/orders.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { CartModule } from './cart/cart.module';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { CommentsModule } from './comments/comments.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { CategoriesModule } from './categories/categories.module';
import { MediaModule } from './media/media.module';
import { RegionModule } from './region/region.module';
import { ComfortStadiumModule } from './comfort_stadium/comfort_stadium.module';
import { ComfortModule } from './comfort/comfort.module';
import { DistrictModule } from './district/district.module';
import { StatusModule } from './status/status.module';


@Module({
    imports: [
        ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
        ServeStaticModule.forRoot({
            rootPath: resolve(__dirname, 'static')
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [],
            autoLoadModels: true,
            logging: false
        }),
        AdminModule,
        UsersModule,
        UserWalletModule,
        OrdersModule,
        UserCardsModule,
        CartModule,
        StadiumTimesModule,
        CommentsModule,
        StadiumsModule,
        CategoriesModule,
        MediaModule,
        RegionModule,
        ComfortStadiumModule,
        ComfortModule,
        DistrictModule,
        StatusModule
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule{}