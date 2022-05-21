import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity } from 'typeorm';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'approvals' })
export class AcademicStudentFinalAssignmentTransactionApproval extends MasterEntity {
}