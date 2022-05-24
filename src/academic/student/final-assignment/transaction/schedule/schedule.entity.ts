import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { AcademicStudentFinalAssignmentTransactionEvaluationEntity } from '../evaluation/evaluation.entity';

@Entity({ schema: 'academic_student_final_assignment_transaction', name: 'schedules' })
export class AcademicStudentFinalAssignmentTransactionScheduleEntity extends MasterEntity {
    @Column({ name: 'schedule_date', type: 'date' })
    @IsNotEmpty()
    schedule_date: Date;

    @Column({ name: 'schedule_time', type: 'time' })
    @IsNotEmpty()
    schedule_time: Date;

    @Column({ name: 'submission_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    submission_id: string;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionEvaluationEntity,
        (evaluation: AcademicStudentFinalAssignmentTransactionEvaluationEntity) => evaluation.schedule,
    )
    evaluations: Array<AcademicStudentFinalAssignmentTransactionEvaluationEntity>;
}