import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { DataBaseModule } from 'src/database/database.module';

@Module({
  imports: [DataBaseModule],
  providers: [...userProviders, UserService],
  controllers: [UserController],
})
export class UserModule {}
