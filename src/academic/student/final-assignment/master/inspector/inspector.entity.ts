import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity } from 'typeorm';

@Entity({ schema: 'academic_student_final_assignment_master', name: 'inspectors' })
export class AcademicStudentFinalAssignmentMasterInspector extends MasterEntity {
}