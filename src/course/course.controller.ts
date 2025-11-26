import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDTO } from './dto/upsert-dto.collaborator';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}


    @Get('/')
    async showALlCourses() {
        let courses = await this.courseService.getAll();
        return courses;
    }

    @Post('/')
    create(@Body() customerBody: CourseDTO){
        return this.courseService.create(customerBody);
    }

    @Put(':id')
    update(@Param('id') courseID: number, @Body() updateBody: CourseDTO){
        return this.courseService.update(courseID, updateBody);
    }

    @Delete(':id')
    delete(@Param('id') courseID: number){
        return this.courseService.delete(courseID);
    }


}
