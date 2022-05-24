import { ReferenceEntity } from '../../../../../abstract/reference.entity';
import { Entity, OneToMany } from 'typeorm';
import { AcademicStudentFinalAssignmentTransactionApprovalEntity } from '../../transaction/approval/approval.entity';

@Entity({ schema: 'academic_student_final_assignment_reference', name: 'types' })
export class AcademicStudentFinalAssignmentReferenceTypeEntity extends ReferenceEntity {

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionApprovalEntity,
        (approval: AcademicStudentFinalAssignmentTransactionApprovalEntity) => approval.type,
    )
    approvals: Array<AcademicStudentFinalAssignmentTransactionApprovalEntity>;
}