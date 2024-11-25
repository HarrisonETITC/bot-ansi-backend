import { config } from "dotenv";
import { DataSourceOptions } from "typeorm";

config();

export class TyepOrmConfig {
    public static readonly optsmysql: DataSourceOptions = {
        type: 'mysql',
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT),
        entities: ['src/**/*.entity{.ts,.js}'],
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        logging: ["error", "query"],
        migrationsRun: process.env.ORM_SYNCHRONIZE == 'false',
        synchronize: (process.env.ORM_SYNCHRONIZE == 'true'),
        migrations: ['dist/**/*-mysql.js'],
        dropSchema: false,
        migrationsTableName: 'migrations'
    }
}