import { ReferenceEntity } from '../../../../../abstract/reference.entity';
import { Entity, OneToMany } from 'typeorm';
import { AcademicStudentFinalAssignmentTransactionAdviserEntity } from '../../transaction/adviser/adviser.entity';

@Entity({ schema: 'academic_student_final_assignment_reference', name: 'adviser_categories' })
export class AcademicStudentFinalAssignmentReferenceAdviserCategoryEntity extends ReferenceEntity {
    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionAdviserEntity,
        (adviser: AcademicStudentFinalAssignmentTransactionAdviserEntity) => adviser.adviser_category,
    )
    advisers: Array<AcademicStudentFinalAssignmentTransactionAdviserEntity>;
}