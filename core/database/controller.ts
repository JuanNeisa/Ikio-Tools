import sqlite3 from 'sqlite3'
import { ISqlite, IMigrate } from 'sqlite'
import { open } from 'sqlite'
import { fileExists } from '../utils/database';

export class sqliteDatabase{
    private filePath: string = '';
    private isMigration:boolean;

    constructor(filePath: string){
        this.filePath = filePath;
        this.isMigration = fileExists(this.filePath)
    }

    getIsMigration(){
        return !this.isMigration
    }

    async getDB(){
        return open({
            filename: this.filePath,
            driver: sqlite3.Database
        })
    }
}