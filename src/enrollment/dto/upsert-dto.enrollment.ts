import { IsDate, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator"


export class EnrollmentsDTO {
  @IsNotEmpty()
  @IsString()   
  studentName: string;

  @IsNotEmpty()
  @IsString()
  studentEmail: string;

  @IsNotEmpty()
  @IsNumber()
  studentCpf: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  studentPhone: string;

  @IsNotEmpty()
  @IsDate()
  birthDate: string;

  @IsNotEmpty()
  @IsNumber()
  courseId: number;

  @IsNumber()
  @IsDate()
  createAt: Date

}