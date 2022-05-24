import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { AcademicStudentFinalAssignmentTransactionPrerequisiteEntity } from '../prerequisite/prerequisite.entity';
import { AcademicStudentFinalAssignmentMasterInspectorEntity } from '../../master/inspector/inspector.entity';
import { AcademicStudentFinalAssignmentReferenceTypeEntity } from '../../reference/type/type.entity';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'approvals' })
export class AcademicStudentFinalAssignmentTransactionApprovalEntity extends MasterEntity {
    @Column({ name: 'prerequisite_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    prerequisite_id: string;

    @Column({ name: 'inspector_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    inspector_id: string;

    @Column({ name: 'type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    type_id: string;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentTransactionPrerequisiteEntity,
        (prerequisite: AcademicStudentFinalAssignmentTransactionPrerequisiteEntity) => prerequisite.approvals,
    )
    @JoinColumn({ name: 'prerequisite_id' })
    prerequisite: AcademicStudentFinalAssignmentTransactionPrerequisiteEntity;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentMasterInspectorEntity,
        (inspector: AcademicStudentFinalAssignmentMasterInspectorEntity) => inspector.approvals,
    )
    @JoinColumn({ name: 'inspector_id' })
    inspector: AcademicStudentFinalAssignmentMasterInspectorEntity;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentReferenceTypeEntity,
        (type: AcademicStudentFinalAssignmentReferenceTypeEntity) => type.approvals,
    )
    @JoinColumn({ name: 'type_id' })
    type: AcademicStudentFinalAssignmentReferenceTypeEntity;
}