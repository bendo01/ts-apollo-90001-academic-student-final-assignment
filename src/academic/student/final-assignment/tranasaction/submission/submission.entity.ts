import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'submissions' })
export class AcademicStudentFinalAssignmentTransactionSubmission extends MasterEntity {
    @Column({ name: 'title', type: 'text' })
    @IsNotEmpty()
    title: string;

    @Column({ name: 'student_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    student_id: string;

    @Column({ name: 'type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    type_id: string;

    @Column({ name: 'approval_type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    approval_type_id: string;

    @Column({ name: 'is_taken', type: 'timestamp', nullable:true })
    is_taken: Date;

    @Column({ name: 'is_lock', type: 'timestamp', nullable:true })
    is_lock: Date;
}