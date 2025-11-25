import { IsDate, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator"


export class Enrollments {
  @IsNotEmpty()
  @IsString()   
  studentName: String;

  @IsNotEmpty()
  @IsString()
  studentEmail: String;

  @IsNotEmpty()
  @IsNumber()
  studentCpf: Number;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  studentPhone: Number;

  @IsNotEmpty()
  @IsDate()
  birthDate: Number;

  @IsNotEmpty()
  @IsNumber()
  courseId: Number;

}