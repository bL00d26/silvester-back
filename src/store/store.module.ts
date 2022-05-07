import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection } from 'src/enums';
import { storeSchema } from './schemas/store.schema';

@Module({
  controllers: [StoreController],
  providers: [StoreService],
  imports: [
    MongooseModule.forFeature([
      { name: Collection.STORE, schema: storeSchema },
    ]),
  ],
})
export class StoreModule {}
