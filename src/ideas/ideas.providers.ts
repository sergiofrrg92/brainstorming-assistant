import { Idea } from '../ideas/entities/idea.entity';
import { DataSource } from 'typeorm';

export const ideaProviders = [
  {
    provide: 'IDEAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Idea),
    inject: ['DATABASE_CONNECTION'],
  },
];
