import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { EmailModule } from './email/email.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.MONGO_URL, {}),
    UsersModule,
    OrdersModule,
    EmailModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
