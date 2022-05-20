import {useRouter} from "next/router";
import '../../styles/eventos.module.css'
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Evento() {
    const [data, setData] = useState<any>(null);
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        setLoading(true)
        fetch(`/api/evento/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data[0])
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
            <div className="d-flex justify-content-around align-items-center m-3">
                <div className="card text-white bg-success m-3" >
                    <div className="card-body">
                        <h3 className="card-title"><span className="badge bg-dark me-2">1</span>Carga de pilotos</h3>
                        <p className="card-text">Carga  la informacion de todos los pilotos de la competencia.</p>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-dark">Cargar</button>
                        </div>
                    </div>
                </div>
                <i className="bi bi-arrow-bar-right"></i>
                <div className="card text-white bg-secondary m-3" >
                    <div className="card-body">
                        <h3 className="card-title"><span className="badge bg-dark  me-2">2</span>Carga de carreras</h3>
                        <p className="card-text">Sobre los pilotos ingresados generar carreras por categoria</p>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-dark">Crear</button>
                        </div>
                    </div>
                </div>
                <i className="bi bi-arrow-bar-right"></i>
                <div className="card text-white bg-secondary m-3" >
                    <div className="card-body">
                        <h3 className="card-title"><span className="badge bg-dark me-2">3</span>Generar resultados</h3>
                        <p className="card-text">Generacion de resultados de la competencia.</p>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-dark">Generar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}