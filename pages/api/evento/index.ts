import { NextApiRequest, NextApiResponse } from "next";
import { IEvento } from "../../../core/models/database.model";
import { sqliteDatabase } from "../../../core/database/controller";

export default async function obtenerEventos(req: NextApiRequest, res: NextApiResponse) {

    let sqliteDB = new sqliteDatabase('./ikio.db');
    let db = await sqliteDB.getDB()
    if(sqliteDB.getIsMigration())await db.migrate({force:true})

    switch(req.method){
        case 'GET':
            let data = await db.all<IEvento[]>('SELECT * FROM evento;');
            await Promise.all(data.map(async (event, index)=>{
                let n_pilotos = await db.get('SELECT COUNT(*) as n_pilotos FROM piloto WHERE evento_id = ?;', [event.evento_id]);
                data[index] = {...event,...n_pilotos}
            }))
            res.status(200).json(data);
            break;
        case 'POST':
            console.log(req)
            break;
        default:
            res.status(405).json({
                message: "ERROR: Problema en la peticion"
            })
            break;
    }
}