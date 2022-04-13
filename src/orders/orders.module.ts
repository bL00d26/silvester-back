import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Collection } from 'src/enums';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from './schemas/order.schema';
import { orderProductSchema } from './schemas/order-product.schema';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    MongooseModule.forFeature([
      { name: Collection.ORDER, schema: orderSchema },
      { name: Collection.ORDER_PRODUCT, schema: orderProductSchema },
    ]),
  ],
})
export class OrdersModule {}
