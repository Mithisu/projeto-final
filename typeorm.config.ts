
import { Collaborator } from './src/auth/collaborator.entity';

import { Course } from './src/course/course.entity';
import { Enrollments } from './src/enrollment/enrollment.entity';
import { DataSource } from 'typeorm';


export default new DataSource({ // criando as imigrações
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'MariSchool',
  entities: [Collaborator, Course, Enrollments],
  migrations: ['dist/migrations/*.js'],
});