import { ReferenceEntity } from '../../../../../abstract/reference.entity';
import { Entity, OneToMany } from 'typeorm';
import { AcademicStudentFinalAssignmentTransactionRequisiteEntity } from '../../transaction/requisite/requisite.entity';

@Entity({ schema: 'academic_student_final_assignment_reference', name: 'approval_types' })
export class AcademicStudentFinalAssignmentReferenceApprovalTypeEntity extends ReferenceEntity {
    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionRequisiteEntity,
        (requisite: AcademicStudentFinalAssignmentTransactionRequisiteEntity) => requisite.requirement,
    )
    requisites: Array<AcademicStudentFinalAssignmentTransactionRequisiteEntity>;
}