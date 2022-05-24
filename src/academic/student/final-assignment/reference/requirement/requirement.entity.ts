import { ReferenceEntity } from '../../../../../abstract/reference.entity';
import { Entity, OneToMany } from 'typeorm';
import { AcademicStudentFinalAssignmentTransactionPrerequisiteEntity } from '../../transaction/prerequisite/prerequisite.entity';

@Entity({ schema: 'academic_student_final_assignment_reference', name: 'requirements' })
export class AcademicStudentFinalAssignmentReferenceRequirementEntity extends ReferenceEntity {
    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionPrerequisiteEntity,
        (prerequisite: AcademicStudentFinalAssignmentTransactionPrerequisiteEntity) => prerequisite.requirement,
    )
    prerequisites: Array<AcademicStudentFinalAssignmentTransactionPrerequisiteEntity>;
}