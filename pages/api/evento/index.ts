import { NextApiRequest, NextApiResponse } from "next";
import { open } from 'sqlite'
import sqlite3 from "sqlite3";
import path from "path";
import fs from 'fs'

export default async function obtenerEventos(req: NextApiRequest, res: NextApiResponse) {
    let exist;
    try {
        fs.accessSync(path.join('ikio.db'));
        exist = true;
    } catch (e){
        exist = false;
    }
    let db = await open({
        filename: './ikio.db',
        driver: sqlite3.cached.Database
    });

    if(!exist) await db.migrate({force:true});
    let data = await db.all('SELECT * FROM evento;');

    if(req.method !== 'GET'){
        res.status(500).json({
            message: "error: Solo se aceptan peticiones GET"
        })
    }
    res.json(data);
}