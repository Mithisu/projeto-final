import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Enrollments } from './enrollment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentsDTO } from './dto/upsert-dto.enrollment';
import { Public } from 'src/auth/auth.guard';

@Controller('enrollment')
export class EnrollmentController {
    constructor(private enrollments: EnrollmentService ) {}

    @Public()
    @Get()
    getall(){
        return this.enrollments.getAll()
    }


    @Post()
    create(@Body() enrollmentsBody: EnrollmentsDTO){
        return this.enrollments.create(enrollmentsBody)
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.enrollments.delete(id)
    }
}
