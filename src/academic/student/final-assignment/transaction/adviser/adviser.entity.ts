import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';
import { AcademicStudentFinalAssignmentTransactionSubmissionEntity } from '../submission/submission.entity';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'advisers' })
export class AcademicStudentFinalAssignmentTransactionAdviserEntity extends MasterEntity {
    @Column({ name: 'thread', type: 'integer' })
    @IsNotEmpty()
    @IsInt()
    thread: number;

    @Column({ name: 'lecturer_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    lecturer_id: string;

    @Column({ name: 'submission_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    submission_id: string;

    @Column({ name: 'adviser_category_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    adviser_category_id: string;

    @ManyToOne(
        () => AcademicStudentFinalAssignmentTransactionSubmissionEntity,
        (submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity) => submission.advisers,
    )
    @JoinColumn({ name: 'submission_id' })
    submission: AcademicStudentFinalAssignmentTransactionSubmissionEntity;
}