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
import { MailModule } from './mail/mail.module';
import { BotModule } from './bot/bot.module';
import { TelegrafModule } from "nestjs-telegraf";
import { BOT_NAME } from "./app.constants";
import { Users } from "./users/models/user.model";
import { Bot } from "./bot/models/bot.model";
import { JwtModule } from "@nestjs/jwt";
import { OtpModule } from "./otp/otp.module";
import { Comfort } from "./comfort/model/comfort.model";
import { Comments } from "./comments/models/comment.model";
import { Stadium } from "./stadiums/models/stadium.model";
import { User_wallet } from "./user_wallet/models/user_wallet.model";
import { Orders } from "./orders/models/order.model";
import { UsersCard } from "./user_cards/model/user_card.model";
import { Categories } from "./categories/model/category.model";
import { Region } from "./region/model/region.region";
import { District } from "./district/models/district.model";
import { Media } from "./media/models/media.model";
import { ComfortStadium } from "./comfort_stadium/model/comfort_stadium.model";
import { StadiumTimes } from "./stadium_times/model/stadium_time.model";
import { Cart } from "./cart/model/cart.model";
import { Admin } from "./admin/models/admin.model";
import { MailService } from "./mail/mail.service";


@Module({
    imports: [
        TelegrafModule.forRootAsync({
            botName: BOT_NAME,
            useFactory: () => ({
                token: process.env.BOT_TOKEN,
                moddlewares: [],
                include: [BotModule]
            })
        }),
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
            models: [Users, Bot, Comfort, Comments, Stadium, User_wallet, Orders, UsersCard, Categories, Region, District, Media, ComfortStadium, StadiumTimes, Cart, Admin ],
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
        StatusModule,
        MailModule,
        BotModule,
        JwtModule,
        OtpModule
    ],
    providers: [MailService],
    exports: [JwtModule]
})
export class AppModule{}