import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';
import { AcademicStudentFinalAssignmentTransactionApprovalEntity } from '../../transaction/approval/approval.entity';
import { AcademicStudentFinalAssignmentTransactionRequisiteEntity } from '../../transaction/requisite/requisite.entity';

@Entity({ schema: 'academic_student_final_assignment_master', name: 'inspectors' })
export class AcademicStudentFinalAssignmentMasterInspectorEntity extends MasterEntity {
    @Column({ name: 'code', type: 'integer' })
    @IsNotEmpty()
    @IsInt()
    code: number;

    @Column({ name: 'title', type: 'varchar', length: 255 })
    @IsNotEmpty()
    title: string;

    @Column({ name: 'name', type: 'varchar', length: 255 })
    @IsNotEmpty()
    name: string;

    @Column({ name: 'position', type: 'varchar', length: 255 })
    @IsNotEmpty()
    position: string;

    @Column({ name: 'unit_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    unit_id: string;

    @Column({ name: 'staff_id', type: 'uuid' })
    @IsNotEmpty()
    @IsUUID()
    staff_id: string;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionApprovalEntity,
        (approval: AcademicStudentFinalAssignmentTransactionApprovalEntity) => approval.inspector,
    )
    approvals: Array<AcademicStudentFinalAssignmentTransactionApprovalEntity>;

    @OneToMany(
        () => AcademicStudentFinalAssignmentTransactionRequisiteEntity,
        (requisite: AcademicStudentFinalAssignmentTransactionRequisiteEntity) => requisite.submission,
    )
    requisites: Array<AcademicStudentFinalAssignmentTransactionRequisiteEntity>;
}