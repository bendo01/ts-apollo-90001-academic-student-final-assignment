import { ReferenceEntity } from '../../../../../abstract/reference.entity';
import { Entity, OneToMany } from 'typeorm';
import { AcademicStudentFinalAssignmentTransactionApprovalEntity } from '../../transaction/approval/approval.entity';
import { AcademicStudentFinalAssignmentTransactionEvaluationEntity } from '../../transaction/evaluation/evaluation.entity';
import { AcademicStudentFinalAssignmentTransactionSubmissionEntity } from '../../transaction/submission/submission.entity';

@Entity({ schema: 'academic_student_final_assignment_reference', name: 'types' })
export class AcademicStudentFinalAssignmentReferenceTypeEntity extends ReferenceEntity {

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionApprovalEntity,
        (approval: AcademicStudentFinalAssignmentTransactionApprovalEntity) => approval.type,
    )
    approvals: Array<AcademicStudentFinalAssignmentTransactionApprovalEntity>;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionEvaluationEntity,
        (evaluation: AcademicStudentFinalAssignmentTransactionEvaluationEntity) => evaluation.type,
    )
    evaluations: Array<AcademicStudentFinalAssignmentTransactionEvaluationEntity>;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionSubmissionEntity,
        (submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity) => submission.type,
    )
    submission: Array<AcademicStudentFinalAssignmentTransactionSubmissionEntity>;
}