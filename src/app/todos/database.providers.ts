import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Todo } from 'src/app/todos/entities/Todo';
import { DATA_SOURCE } from './const/constants';

export const databaseProviders = [
  {
    // provideの名前で他のDataSourceからInjectして設定を注入することができる
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [Todo],
        // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
        synchronize: true,
        logging: false,
      });
      return dataSource.initialize();
    },
  },
];
