import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column } from 'typeorm';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

@Entity({ schema: 'academic_student_final_assignment_master', name: 'inspectors' })
export class AcademicStudentFinalAssignmentMasterInspector extends MasterEntity {
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
}