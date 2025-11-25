import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { CourseDTO } from './dto/upsert-dto.collaborator';

@Injectable()
export class CourseService {

    constructor(@InjectRepository(Course)
    private courseRepository: Repository<Course>
) {}

async update(courseId: number, courseBody: CourseDTO){
    const gettingID = await this.courseRepository.findOne({where: {courseId}})

}

}
