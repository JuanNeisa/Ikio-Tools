import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

async function setup() {
    const db = await open({
        filename: './ikio.db',
        driver: sqlite3.cached.Database
    }).catch((e) => {
        console.log('ERROR: ' + e)
    })
    await db.migrate({force:true});
}

setup()