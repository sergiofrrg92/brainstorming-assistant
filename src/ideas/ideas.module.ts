import { Module } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { IdeasController } from './ideas.controller';
import { ideaProviders } from './ideas.providers';
import { DataBaseModule } from 'src/database/database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [IdeasController],
  providers: [...ideaProviders, IdeasService],
})
export class IdeasModule {}
