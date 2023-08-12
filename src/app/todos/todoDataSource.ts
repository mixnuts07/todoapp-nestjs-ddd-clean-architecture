import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Todo } from 'src/app/todos/entities/Todo';

export const todoDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Todo],
  synchronize: true,
  logging: false,
});

todoDataSource
  .initialize()
  .then(() => console.log('Connect DB'))
  .catch((error) => console.log(error));
