import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTatooArtist1704813466542 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tattoo_artists",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nickname",
            type: "varchar",
            length: "50",
          },
          {
            name: "description",
            type: "varchar",
            length: "255",
            isNullable:true
          },
          {
            name: "password",
            type: "varchar",
            length: "200",
          },
          {
            name: "first_name",
            type: "varchar",
            length: "255",
          },
          {
            name: "last_name",
            type: "varchar",
            length: "255",
          },
          {
            name: "email",
            type: "varchar",
            length: "255",
            isUnique: true,
          },
          {
            name: "role",
            type: "enum",
            enum: ["user", "admin", "super_admin"],
            default: '"admin"'
        },
          {
            name: "active",
            type: "Tinyint",
            default: 1,
            length: "1",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
        },
        {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
        },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tattoo_artists");
  }
}
