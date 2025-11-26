import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { ConfigModule } from '@nestjs/config';
import { Course } from './course/course.entity';
import { Enrollments } from './enrollment/enrollment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './env',
      isGlobal: true
    
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'MariSchoo',
      autoLoadEntities: true,
      synchronize: false,  // importante! false em produção
      logging: true,  
}),
    CourseModule,
    EnrollmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
