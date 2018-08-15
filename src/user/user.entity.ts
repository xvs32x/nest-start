import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { BaseEntity } from '../base/classes/base.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({unique: true, primary: true}) email: string;
  @Column() password: string;
  @Column() lastname: string;
  @Column() firstname: string;
  @ManyToMany(type => RoleEntity) @JoinTable() roles: RoleEntity[];
}