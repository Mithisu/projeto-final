import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollments } from './enrollment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnrollmentService {
    
    constructor(@InjectRepository(Enrollments)
    private enrollmentsRepository: Repository<Enrollments>
) {}







}
