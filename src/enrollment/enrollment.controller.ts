import { Body, Controller, Get, Post } from '@nestjs/common';
import { Enrollments } from './enrollment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentsDTO } from './dto/upsert-dto.enrollment';
import { Public } from 'src/auth/auth.guard';

@Controller('enrollment')
export class EnrollmentController {
    constructor(private enrollments: EnrollmentService ) {}

    @Get()
    getall(){
        return this.enrollments.getAll()
    }


    @Public()
    @Post()
    create(@Body() enrollmentsBody: EnrollmentsDTO){
        return this.enrollments.create(enrollmentsBody)
    }
}
