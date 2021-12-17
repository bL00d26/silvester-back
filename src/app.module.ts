import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pixie:pixie123@cluster0.g8kd3.mongodb.net/silvesterdb',
      {
        useCreateIndex: true,
        useFindAndModify: false,
      },
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
