import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';
import { AcademicStudentFinalAssignmentTransactionSubmissionEntity } from '../submission/submission.entity';
import { AcademicStudentFinalAssignmentMasterInspectorEntity } from '../../master/inspector/inspector.entity';
import { AcademicStudentFinalAssignmentReferenceRequirementEntity } from '../../reference/requirement/requirement.entity';
import { AcademicStudentFinalAssignmentReferenceApprovalTypeEntity } from '../../reference/approval-type/approval-type.entity';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'requisites' })
export class AcademicStudentFinalAssignmentTransactionRequisiteEntity extends MasterEntity {
    @Column({ name: 'thread', type: 'integer' })
    @IsNotEmpty()
    @IsInt()
    thread: number;

    @Column({ name: 'submission_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    submission_id: string;
    
    @Column({ name: 'inspector_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    inspector_id: string;

    @Column({ name: 'requirement_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    requirement_id: string;

    @Column({ name: 'approval_type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    approval_type_id: string;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentTransactionSubmissionEntity,
        (submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity) => submission.requisites,
    )
    @JoinColumn({ name: 'submission_id' })
    submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentMasterInspectorEntity,
        (inspector: AcademicStudentFinalAssignmentMasterInspectorEntity) => inspector.requisites,
    )
    @JoinColumn({ name: 'inspector_id' })
    inspector: AcademicStudentFinalAssignmentMasterInspectorEntity;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentReferenceRequirementEntity,
        (requirement: AcademicStudentFinalAssignmentReferenceRequirementEntity) => requirement.requisites,
    )
    @JoinColumn({ name: 'requirement_id' })
    requirement: AcademicStudentFinalAssignmentReferenceRequirementEntity;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentReferenceApprovalTypeEntity,
        (approval_type: AcademicStudentFinalAssignmentReferenceApprovalTypeEntity) => approval_type.requisites,
    )
    @JoinColumn({ name: 'approval_type_id' })
    approval_type: AcademicStudentFinalAssignmentReferenceApprovalTypeEntity;
}