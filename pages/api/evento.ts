import {NextApiRequest, NextApiResponse} from "next";

export default function obtenerEventos(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        res.status(500).json({
            message: "error: Solo se aceptan peticiones GET"
        })
    }
    res.json({message: 'obtenerEventos', method: req.method});
}