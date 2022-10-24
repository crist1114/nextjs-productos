import { createPool } from "mysql2/promise"; 

const pool = createPool({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5528935',
    password: 'SKsTvdyN6p',
    port: 3306,
    database: 'sql5528935'
})

export {pool}