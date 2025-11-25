import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity() 
export class Enrollments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    studentName: string;

    @Column()
    studentCpf: number;

    @Column()
    courseId: number;

    @CreateDateColumn()
    createAt: Date;

}