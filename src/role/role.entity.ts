import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base/classes/base.entity';

@Entity({ name: 'role' })
export class RoleEntity extends BaseEntity {
  @Column({primary: true, unique: true}) name: string;
}