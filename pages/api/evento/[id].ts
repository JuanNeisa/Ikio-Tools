import {NextApiRequest, NextApiResponse} from "next";
import fs from "fs";
import path from "path";
import {open} from "sqlite";
import sqlite3 from "sqlite3";

export default async function obtenerEventoById(
    req: NextApiRequest,
    res: NextApiResponse) {
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

    // if(!exist) await db.migrate({force:true});
    await db.migrate({force:true});
    let data = await db.all('SELECT * FROM evento WHERE evento_id = ?;', [req.query.id] );
    let n_pilotos = await db.get('SELECT COUNT(*) as n_pilotos FROM piloto WHERE evento_id = ?;', [req.query.id]);

    if(req.method !== 'GET'){
        res.status(500).json({
            message: "error: Solo se aceptan peticiones GET"
        })
    }
    res.json({data,n_pilotos});
}