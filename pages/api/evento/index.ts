import { NextApiRequest, NextApiResponse } from "next";
import { IEvento } from "../../../core/models/database.model";
import { sqliteDatabase } from "../../../core/database/controller";

export default async function obtenerEventos(req: NextApiRequest, res: NextApiResponse) {

    let sqliteDB = new sqliteDatabase('./ikio.db');
    let db = await sqliteDB.getDB()
    console.log(sqliteDB.getIsMigration())
    await db.migrate({force:true})

    let data = await db.all<IEvento[]>('SELECT * FROM evento;');

    switch(req.method){
        case 'GET':
            res.status(200).json(data);
            break;
        default:
            res.status(500).json({
                message: "error: Solo se aceptan peticiones GET"
            })
            break;
    }
}