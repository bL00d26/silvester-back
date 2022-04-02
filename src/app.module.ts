import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    ProductsModule,
    OrdersModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
