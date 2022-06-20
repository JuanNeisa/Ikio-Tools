import { NextApiRequest, NextApiResponse } from "next";
import { IEvento } from "../../../core/models/database.model";
import { sqliteDatabase } from "../../../core/database/controller";

export default async function obtenerEventos(req: NextApiRequest, res: NextApiResponse) {

    let sqliteDB = new sqliteDatabase('./ikio.db');
    let db = await sqliteDB.getDB()
    if(sqliteDB.getIsMigration())await db.migrate({force:true})

    switch(req.method){
        case 'GET':
            try {
                let data = await db.all<IEvento[]>('SELECT * FROM evento;');
                await Promise.all(data.map(async (event, index)=>{
                    let n_pilotos = await db.get('SELECT COUNT(*) as n_pilotos FROM piloto WHERE evento_id = ?;', [event.evento_id]);
                    data[index] = {...event,...n_pilotos}
                }))
                res.status(200).send(data);
            } catch (error) {
                res.status(500).send({error})
            }
            break;
        case 'POST':
            try {
                const result = await db.run('INSERT INTO evento VALUES(null,?,?,?,1,?)',
                    req.body.event.nombre,
                    req.body.event.ubicacion,
                    req.body.event.descripcion,
                    req.body.event.fecha,
                )
                res.status(200).send({message: 'Successfully', result})
            } catch (error) {
                res.status(500).send({error})
            }
            break;
        case 'DELETE':
            try {
                const result = await db.run(`DELETE FROM evento WHERE evento_id = ${req.body.eventId}`)
                res.status(200).send({message: 'Successfully', result})
            } catch (error) {
                res.status(500).send({error})
            }
            break;
        default:
            res.status(405).send({
                message: "ERROR: Problema en la peticion"
            })
            break;
    }
}