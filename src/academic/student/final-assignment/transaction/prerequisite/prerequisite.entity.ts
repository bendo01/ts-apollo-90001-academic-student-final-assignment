import { MasterEntity } from '../../../../../abstract/master.entity';
import { Entity, Column } from 'typeorm';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

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
}