import {NextApiRequest, NextApiResponse} from "next";

export default function obtenerEventoById(req: NextApiRequest, res: NextApiResponse) {
    res.json({
        byId: req.query.id,
        message: req.method,
        message_1: 'obtenerEventoById'
    });
}