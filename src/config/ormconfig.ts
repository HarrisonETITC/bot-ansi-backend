import { config } from "dotenv";
import { DataSourceOptions } from "typeorm";

config();

export class TyepOrmConfig {
    private static readonly optsmysqldev: DataSourceOptions = {
        type: 'mysql',
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT),
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        logging: ["error", "query"],
        synchronize: true,
        migrations: ['dist/**/*-mysql.js'],
        dropSchema: false,
        migrationsTableName: 'migrations'
    }

    private static readonly optsmysqlprod: DataSourceOptions = {
        type: 'mysql',
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT),
        entities: ['dist/**/*.entity{.ts,.js}'],
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        logging: ["error", "query"],
        synchronize: false,
        migrationsRun: process.env.ORM_SYNCHRONIZE == 'false',
        migrations: ['dist/**/*-mysql.js'],
        dropSchema: false,
        migrationsTableName: 'migrations'
    }

    public static getConfig() {
        if (process.env.ENVIRONMENT === 'dev')
            return this.optsmysqldev;

        return this.optsmysqlprod;
    }
}