import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity() 
export class Enrollments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    studentName: string;

    @Column()
    studentEmail: string;

    @Column()
    studentPhone: string;

    @Column()
    birthDate: string;

    @Column()
    studentCpf: string;

    @Column()
    courseId: number;

    @CreateDateColumn({name: "createAt"})
    createAt: Date;

}