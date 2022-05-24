import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';
import { AcademicStudentFinalAssignmentTransactionApprovalEntity } from '../approval/approval.entity';
import { AcademicStudentFinalAssignmentReferenceRequirementEntity } from '../../reference/requirement/requirement.entity';
import { AcademicStudentFinalAssignmentTransactionSubmissionEntity } from '../submission/submission.entity';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'prerequisites' })
export class AcademicStudentFinalAssignmentTransactionPrerequisiteEntity extends MasterEntity {
    @Column({ name: 'thread', type: 'integer' })
    @IsNotEmpty()
    @IsInt()
    thread: number;
    
    @Column({ name: 'requirement_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    requirement_id: string;

    @Column({ name: 'submission_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    submission_id: string;

    @Column({ name: 'filename', type: 'varchar', length: 255 })
    filename: string;

    @Column({ name: 'dir', type: 'varchar', length: 255 })
    dir: string;

    @Column({ name: 'type', type: 'varchar', length: 255 })
    type: string;

    @Column({ name: 'filesize', type: 'integer' })
    @IsInt()
    filesize: number;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionApprovalEntity,
        (approval: AcademicStudentFinalAssignmentTransactionApprovalEntity) => approval.prerequisite,
    )
    approvals: Array<AcademicStudentFinalAssignmentTransactionApprovalEntity>;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentReferenceRequirementEntity,
        (requirement: AcademicStudentFinalAssignmentReferenceRequirementEntity) => requirement.prerequisites,
    )
    @JoinColumn({ name: 'requirement_id' })
    requirement: AcademicStudentFinalAssignmentReferenceRequirementEntity;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentTransactionSubmissionEntity,
        (submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity) => submission.prerequisites,
    )
    @JoinColumn({ name: 'submission_id' })
    submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity;
}