import {useRouter} from "next/router";
import '../../styles/evento.module.css'
import Link from "next/link";
import {useEffect, useState} from "react";

interface Evento {
    evento_id : number,
    nombre: string,
    ubicacion: string,
    descripcion?: string,
    fecha: string,
    estado: number
}

export default function Evento() {
    const [data, setData] = useState<Evento>();
    const [n_pilotos, setPilotos] = useState<number>();
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        setLoading(true)
        fetch(`/api/evento/${id}`)
            .then((res) => res.json())
            .then((obj) => {
                setData(obj.data[0])
                console.log(data)
                setPilotos(obj.n_pilotos)
                // console.log(n_pilotos)
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
                        { data &&
                            <nav  className="breadcrumbs">
                                <a className={`breadcrumbs__item ${data!.estado >= 1? "is-active" : ""}`}>Configuracion</a>
                                <a className={`breadcrumbs__item ${data!.estado >= 2? "is-active" : ""}`}>Pilotos</a>
                                <a className={`breadcrumbs__item ${data!.estado >= 3? "is-active" : ""}`}>Carreras</a>
                                <a className={`breadcrumbs__item ${data!.estado >= 4? "is-active" : ""}`}>Informes</a>
                            </nav>
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="tarjetas col-4 pt-2 rounded-3">
                        <div className="card border-primary mb-1">
                            <div className="card-header bg-primary text-light border-primary">Numero de pilotos</div>
                            <div className="card-body text-primary">
                                {(n_pilotos)?Object.values(n_pilotos)[0]:'---'}
                            </div>  
                        </div>
                        <div className="card border-warning mb-1">
                            <div className="card-header bg-warning  text-light border-warning ">Numero de categorias</div>
                            <div className="card-body text-warning">
                                <h3 className="card-title">---</h3>
                            </div>  
                        </div>
                        <div className="card border-success mb-1">
                            <div className="card-header bg-success text-light border-success">Numero de carreras</div>
                            <div className="card-body text-success">
                                <h3 className="card-title">---</h3>
                            </div>  
                        </div>
                    </div>
                    <div className="col-8 p-3">
                        <h4>Sponsors</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}