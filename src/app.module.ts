import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { CollaboratorModule } from './collaborator/collaborator.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'MariSchool',
      autoLoadEntities: true,
      synchronize: false,  // importante! false em produção
      logging: true,  
}),
    CourseModule,
    EnrollmentModule,
    CollaboratorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
