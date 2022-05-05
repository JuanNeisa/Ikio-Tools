import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export default async function cargarBD() {
    return open({
        filename: './ikio.db',
        driver: sqlite3.cached.Database
    }).catch((e) => {
        console.log('ERROR: ' + e)
    })
}