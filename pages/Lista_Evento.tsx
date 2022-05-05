import '../styles/Lista_evento.module.css'

import {useEffect, useState} from "react";
import Link from "next/link";

interface Lista_Evento {
    evento_id : number,
    nombre: string,
    ubicacion: string,
    descripcion?: string,
    fecha: number
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
        <div className="list-group">
            { data.map((evento: Lista_Evento) => {
                return (
                    <Link key={evento.evento_id} href='#'>
                        <a className={`list-group-item list-group-item-action`}
                           aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{evento.nombre}</h5>
                                <small>{evento.fecha}</small>
                            </div>
                            <p className="mb-1">{evento.ubicacion}</p>
                            <small>{evento.descripcion? evento.descripcion : ''}</small>
                        </a>
                    </Link>
                )
            }) }
        </div>

    )
}

export default Lista