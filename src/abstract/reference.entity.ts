import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';

import { IsNotEmpty } from 'class-validator';

export abstract class ReferenceEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'code', type: 'int' })
    @IsNotEmpty()
    code: number;

    @Column({ name: 'alphabet_code', type: 'varchar', length: 255 })
    @IsNotEmpty()
    alphabet_code: string;

    @Column({ name: 'name', type: 'varchar', length: 255 })
    @IsNotEmpty()
    name: string;

    @Column({ name: 'created_by', type: 'uuid', nullable: true })
    created_by?: string;

    @Column({ name: 'modified_by', type: 'uuid', nullable: true })
    modified_by?: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn({ nullable: true })
    deleted_at?: Date;
}
