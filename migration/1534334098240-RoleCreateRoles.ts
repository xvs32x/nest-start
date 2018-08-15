import { MigrationInterface, QueryRunner } from 'typeorm';

export class RoleCreateRoles1534334098240 implements MigrationInterface {

  roles = ['root', 'admin', 'moderator', 'user'];

  public async up(queryRunner: QueryRunner): Promise<any> {
    this.roles.forEach(async (role) => {
      await queryRunner.query(`INSERT IGNORE INTO role (isActive, name) VALUES(true, '` + role + `')`);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
