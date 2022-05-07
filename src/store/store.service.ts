import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection } from 'src/enums';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './models/store.model';

@Injectable()
export class StoreService {
  private readonly logger = new Logger('OrdersService');
  constructor(
    @InjectModel(Collection.STORE)
    private readonly storeModel: Model<Store>,
  ) {}
  async create(createStoreDto: CreateStoreDto) {
    try {
      const newStore = await new this.storeModel(createStoreDto).save();
      return newStore;
    } catch (error) {
      this.logger.log(error);
      return null;
    }
  }

  async findAll() {
    return `This action returns all store`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  async remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
