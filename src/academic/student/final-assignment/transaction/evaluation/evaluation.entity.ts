import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column } from 'typeorm';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'evaluations' })
export class AcademicStudentFinalAssignmentTransactionEvaluationEntity extends MasterEntity {
    @Column({ name: 'thread', type: 'integer' })
    @IsNotEmpty()
    @IsInt()
    thread: number;

    @Column({ name: 'grade', type: 'float' })
    @IsNotEmpty()
    @IsInt()
    grade: number;

    @Column({ name: 'adviser_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    adviser_id: string;

    @Column({ name: 'schedule_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    schedule_id: string;

    @Column({ name: 'type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    type_id: string;
}