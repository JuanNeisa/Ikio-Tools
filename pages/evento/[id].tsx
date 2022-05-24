import {useRouter} from "next/router";
import '../../styles/evento.module.css'
import Link from "next/link";
import {useEffect, useState} from "react";

interface Evento {
    evento_id : number,
    nombre: string,
    ubicacion: string,
    descripcion?: string,
    fecha: string
}

export default function Evento() {
    const [data, setData] = useState<Evento>();
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        setLoading(true)
        fetch(`/api/evento/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data[0])
                console.log(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <nav aria-label="breadcrumb" className="m-3">
                <ol className="breadcrumb">
                    <Link href="/">
                            <li className="breadcrumb-item">
                                <div>
                                <i className="bi bi-calendar me-1"></i>
                                <a>Eventos</a>
                                </div>
                            </li>
                    </Link>
                    <li className="breadcrumb-item active" aria-current="page">{data?.nombre}</li>
                </ol>
            </nav>
            <h1 className="text-center">Dashboard</h1>
            <div className="container border border-3 p-4 rounded-3">
                <h4><i className="bi bi-info-square me-2"></i>Informacion</h4>
                <div className="row m-2">
                    <span className="col-4 fw-bolder">Fecha</span>
                    <span className="col-8">{data?.fecha}</span>
                </div>
                <div className="row m-2">
                    <span className="col-4 fw-bolder">Nombre</span>
                    <span className="col-8">{data?.nombre}</span>
                </div>
                <div className="row m-2">
                    <span className="col-4 fw-bolder">Ubicacion</span>
                    <span className="col-8">{data?.ubicacion}</span>
                </div>
                <div className="row m-2">
                    <span className="col-4 fw-bolder">Descripcion</span>
                    <span className="col-8">{(data?.descripcion)?data?.descripcion:'Sin descripcion'}</span>
                </div>
                <div className="row m-2 ">
                    <span className="col-4 fw-bolder ">Status</span>
                    <div className="col-8">
                        <nav className="breadcrumbs">
                            <a className="breadcrumbs__item is-active">Configuracion</a>
                            <a className="breadcrumbs__item">Pilotos</a>
                            <a className="breadcrumbs__item">Carreras</a>
                            <a className="breadcrumbs__item">Informes</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}