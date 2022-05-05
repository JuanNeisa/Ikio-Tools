import { NextApiRequest, NextApiResponse } from "next";
import { open } from 'sqlite'
import sqlite3 from "sqlite3";

export default async function obtenerEventos(req: NextApiRequest, res: NextApiResponse) {
    let db = await open({
        filename: './ikio.db',
        driver: sqlite3.cached.Database
    })
    await db.migrate({force:true})
    let data = await db.all('SELECT * FROM evento;');

    if(req.method !== 'GET'){
        res.status(500).json({
            message: "error: Solo se aceptan peticiones GET"
        })
    }
    res.json(data);
}