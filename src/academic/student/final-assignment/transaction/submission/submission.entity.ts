import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { AcademicStudentFinalAssignmentTransactionAdviserEntity } from '../adviser/adviser.entity';
import { AcademicStudentFinalAssignmentTransactionPrerequisiteEntity } from '../prerequisite/prerequisite.entity';
import { AcademicStudentFinalAssignmentTransactionRequisiteEntity } from '../requisite/requisite.entity';
import { AcademicStudentFinalAssignmentTransactionScheduleEntity } from '../schedule/schedule.entity';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'submissions' })
export class AcademicStudentFinalAssignmentTransactionSubmissionEntity extends MasterEntity {
    @Column({ name: 'title', type: 'text' })
    @IsNotEmpty()
    title: string;

    @Column({ name: 'student_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    student_id: string;

    @Column({ name: 'type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    type_id: string;

    @Column({ name: 'approval_type_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    approval_type_id: string;

    @Column({ name: 'is_taken', type: 'timestamp', nullable:true })
    is_taken: Date;

    @Column({ name: 'is_lock', type: 'timestamp', nullable:true })
    is_lock: Date;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionAdviserEntity,
        (adviser: AcademicStudentFinalAssignmentTransactionAdviserEntity) => adviser.submission,
    )
    advisers: Array<AcademicStudentFinalAssignmentTransactionAdviserEntity>;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionPrerequisiteEntity,
        (prerequisite: AcademicStudentFinalAssignmentTransactionPrerequisiteEntity) => prerequisite.submission,
    )
    prerequisites: Array<AcademicStudentFinalAssignmentTransactionPrerequisiteEntity>;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionRequisiteEntity,
        (requisite: AcademicStudentFinalAssignmentTransactionRequisiteEntity) => requisite.submission,
    )
    requisites: Array<AcademicStudentFinalAssignmentTransactionRequisiteEntity>;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionScheduleEntity,
        (schedule: AcademicStudentFinalAssignmentTransactionScheduleEntity) => schedule.submission,
    )
    schedules: Array<AcademicStudentFinalAssignmentTransactionScheduleEntity>;
}