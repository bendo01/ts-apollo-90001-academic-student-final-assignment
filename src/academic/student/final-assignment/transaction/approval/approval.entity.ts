import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'approvals' })
export class AcademicStudentFinalAssignmentTransactionApprovalEntity extends MasterEntity {
    @Column({ name: 'prerequisite_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    prerequisite_id: string;

    @Column({ name: 'inspector_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    inspector_id: string;

    @Column({ name: 'type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    type_id: string;
}