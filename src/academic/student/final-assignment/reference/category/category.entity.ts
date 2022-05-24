import { ReferenceEntity } from '../../../../../abstract/reference.entity';
import { Entity, OneToMany } from 'typeorm';
import { AcademicStudentFinalAssignmentTransactionSubmissionEntity } from '../../transaction/submission/submission.entity';

@Entity({ schema: 'academic_student_final_assignment_reference', name: 'categories' })
export class AcademicStudentFinalAssignmentReferenceCategoryEntity extends ReferenceEntity {
    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionSubmissionEntity,
        (submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity) => submission.category,
    )
    submission: Array<AcademicStudentFinalAssignmentTransactionSubmissionEntity>;
}