import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { IdeasModule } from './ideas/ideas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, IdeasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
