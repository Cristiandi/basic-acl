import { Field, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

import { Role } from '../role/role.entity';
import { ApiKey } from '../api-key/api-key.entity';
import { Project } from '../project/project.entity';

@ObjectType()
@Entity({ name: 'permission' })
@Unique('uk_permission', ['project', 'role', 'apiKey'])
@Unique('uk_permission_1', ['name', 'project'])
export class Permission extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @Generated('uuid')
  uid: string;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Field()
  @Column({ type: 'boolean', default: true })
  allowed: boolean;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // relations

  @Field(() => Project)
  @ManyToOne(() => Project, (project) => project.permissions, {
    nullable: false,
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Field(() => Role, { nullable: true })
  @ManyToOne(() => Role, (role) => role.permissions, { nullable: true })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Field(() => ApiKey, { nullable: true })
  @ManyToOne(() => ApiKey, (apiKey) => apiKey.permissions, { nullable: true })
  @JoinColumn({ name: 'api_key_id' })
  apiKey: ApiKey;
}
