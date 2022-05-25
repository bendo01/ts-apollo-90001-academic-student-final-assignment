import { ReferenceEntity } from '../../../../../abstract/reference.entity';
import { Entity, OneToMany } from 'typeorm';
import { AcademicStudentFinalAssignmentTransactionRequisiteEntity } from '../../transaction/requisite/requisite.entity';
import { AcademicStudentFinalAssignmentTransactionSubmissionEntity } from '../../transaction/submission/submission.entity';
import { AcademicStudentFinalAssignmentTransactionApprovalEntity } from '../../transaction/approval/approval.entity';

@Entity({ schema: 'academic_student_final_assignment_reference', name: 'approval_types' })
export class AcademicStudentFinalAssignmentReferenceApprovalTypeEntity extends ReferenceEntity {
    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionRequisiteEntity,
        (requisite: AcademicStudentFinalAssignmentTransactionRequisiteEntity) => requisite.approval_type,
    )
    requisites: Array<AcademicStudentFinalAssignmentTransactionRequisiteEntity>;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionSubmissionEntity,
        (submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity) => submission.approval_type,
    )
    submissions: Array<AcademicStudentFinalAssignmentTransactionSubmissionEntity>;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionApprovalEntity,
        (approval: AcademicStudentFinalAssignmentTransactionApprovalEntity) => approval.approval_type,
    )
    approvals: Array<AcademicStudentFinalAssignmentTransactionApprovalEntity>;
}