import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column } from 'typeorm';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'requisites' })
export class AcademicStudentFinalAssignmentTransactionRequisite extends MasterEntity {
    @Column({ name: 'thread', type: 'integer' })
    @IsNotEmpty()
    @IsInt()
    thread: number;

    @Column({ name: 'submission_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    submission_id: string;
    
    @Column({ name: 'inspector_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    inspector_id: string;

    @Column({ name: 'requirement_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    requirement_id: string;

    @Column({ name: 'approval_type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    approval_type_id: string;
}