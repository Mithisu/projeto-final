import { DataSource } from 'typeorm';


export default new DataSource({ // criando as imigrações
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'MariSchool',
  entities: [],
  migrations: ['dist/migrations/*.js'],
});