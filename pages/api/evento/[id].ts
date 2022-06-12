import {NextApiRequest, NextApiResponse} from "next";
import { IEvento } from "../../../core/models/database.model";
import { sqliteDatabase } from "../../../core/database/controller";

export default async function obtenerEventoById(
    req: NextApiRequest,
    res: NextApiResponse) {

    let sqliteDB = new sqliteDatabase('./ikio.db');
    let db = await sqliteDB.getDB()
    if(sqliteDB.getIsMigration()) await db.migrate({force:true})

    switch(req.method){
        case 'GET':
            let data = await db.get<IEvento>('SELECT * FROM evento WHERE evento_id = ?;', [req.query.id] );
            let n_pilotos = await db.get('SELECT COUNT(*) as n_pilotos FROM piloto WHERE evento_id = ?;', [req.query.id]);
            res.status(200).json({...data, ...n_pilotos});
            break;
        case 'POST':
            break;
        default:
            res.status(500).json({
                message: "Error en la peticion"
            })
            break;
    }
}