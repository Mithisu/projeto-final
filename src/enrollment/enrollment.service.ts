import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollments } from './enrollment.entity';
import { Repository } from 'typeorm';
import { EnrollmentsDTO } from './dto/upsert-dto.enrollment';

@Injectable()
export class EnrollmentService {
    
    constructor(@InjectRepository(Enrollments)
    private enrollmentsRepository: Repository<Enrollments>
) {}


getAll(){
    return this.enrollmentsRepository.find()
}

async create(enrollments: EnrollmentsDTO){
    const newEnrollments = this.enrollmentsRepository.create(enrollments);
    await this.enrollmentsRepository.save(newEnrollments)

    return {
        message: "Matrícula criada com sucesso!"
    }

}



}
