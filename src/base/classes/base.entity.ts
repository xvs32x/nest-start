import { BeforeInsert, BeforeUpdate, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ default: true }) isActive: boolean;
  @Column({ readonly: true }) createdAt: number;
  @Column({ readonly: true }) updatedAt: number;

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = +new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = +new Date();
  }
}