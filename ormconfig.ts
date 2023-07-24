import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [
        'dist/src/db/migrations/*.js'
    ]
}

export default config;