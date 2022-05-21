import { ReferenceEntity } from '../../../../../abstract/reference.entity';
import { Entity } from 'typeorm';

@Entity({ schema: 'academic_student_final_assignment_reference', name: 'adviser_categories' })
export class AcademicStudentFinalAssignmentReferenceAdviserCategory extends ReferenceEntity {
}