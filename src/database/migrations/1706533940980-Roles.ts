import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Roles1706533940980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "roles",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "role_name",
                        type: "enum",
                        enum: ["user", "admin", "super_admin"],
                        default: '"user"'
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
            
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}