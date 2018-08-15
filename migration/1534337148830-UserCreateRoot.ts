import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class UserCreateRoot1534337148830 implements MigrationInterface {

  user = {
    lastname: 'Smith',
    firstname: 'John',
    email: 'x64vs32x@mail.ru',
    password: '',
  };
  role = 'root';

  public async up(queryRunner: QueryRunner): Promise<any> {
    return new Promise((resolve, reject) => {
        bcrypt.hash('admin', 10, async (err2, hash) => {
          this.user.password = hash;
          queryRunner.query(`INSERT IGNORE INTO user(
          isActive, email, password, lastname, firstname
          ) VALUES(
            true,
            '` + this.user.email + `',
            '` + this.user.password + `',
            '` + this.user.lastname + `',
            '` + this.user.firstname + `'
            )`).then(() => {
            queryRunner.query(`INSERT IGNORE INTO user_roles_role(
            userId, userEmail, roleId, roleName
            ) VALUES(
              1,
              '` + this.user.email + `',
              1,
              'root'
            )`)
              .then(_ => resolve())
              .catch(err => console.log(err));
          });
        });
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
