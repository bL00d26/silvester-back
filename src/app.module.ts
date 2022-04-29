import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { EmailModule } from './email/email.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseModule.forRoot(
      'mongodb+srv://pixie:pixie123@cluster0.g8kd3.mongodb.net/silvesterdb',
      {},
    ),
    AuthModule,
    UsersModule,
    OrdersModule,
    EmailModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
