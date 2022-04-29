import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailModule } from 'src/email/email.module';
import { Collection } from 'src/enums';
import { userSchema } from './schemas';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{ name: Collection.USER, schema: userSchema }]),
    EmailModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
