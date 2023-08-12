import { DataSource } from 'typeorm';
import { Todo } from './entities/Todo';
import { TODO_REPOSITORY } from './const/constants';

export const todoProviders = [
  {
    provide: TODO_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Todo),
    inject: ['DATA_SOURCE'],
  },
];
