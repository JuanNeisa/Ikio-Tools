import {useEffect, useState} from "react";
import Link from "next/link";
import {Accordion, Badge, Button, FormControl, InputGroup} from "react-bootstrap";

interface Lista_Evento {
    evento_id : number,
    nombre: string,
    ubicacion: string,
    descripcion?: string,
    fecha: string
}

function Lista() {
    const [data, setData] = useState<any>(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('api/evento')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (!data || data.length < 1) return <p>No existen eventos en la BD</p>
    return (
        <Accordion>
            { data.map((evento: Lista_Evento) => {
                return (
                    <Link key={evento.evento_id} href='#'>
                        <Accordion.Item eventKey={evento.evento_id.toString()}>
                            <Accordion.Header>{evento.nombre}</Accordion.Header>
                            <Accordion.Body>
                                <div className="d-flex w-100 justify-content-between mb-2" >
                                    <div>
                                        <button type="button" className="btn btn-success btn-sm me-2">Editar</button>
                                        <button type="button" className="btn btn-secondary btn-sm">Abrir</button>
                                    </div>
                                    <Button variant="primary">
                                        Fecha: <Badge bg="secondary">{evento.fecha}</Badge>
                                    </Button>
                                </div>
                                <div className="input-group mb-1">
                                    <span className="input-group-text" id="basic-addon1">Ubicacion</span>
                                    <input type="text" className="form-control" defaultValue={evento.ubicacion} disabled={true} />
                                </div>
                                <div className="input-group mb-1">
                                    <span className="input-group-text" id="basic-addon1">Numero de pilotos</span>
                                    <input type="number" className="form-control" disabled={true}/>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Descripcion</span>
                                    <textarea className="form-control" disabled={true} defaultValue = {evento.descripcion? evento.descripcion : 'Sin descripcion'}></textarea>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Link>
                )
            }) }
        </Accordion>
    )

}

export default Lista