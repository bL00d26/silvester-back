import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection } from 'src/enums';
import { productSchema } from './schemas';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    MongooseModule.forFeature([
      { name: Collection.PRODUCT, schema: productSchema },
    ]),
  ],
})
export class ProductsModule {}
