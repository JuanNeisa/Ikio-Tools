import {useRouter} from "next/router";
import '../../styles/evento.module.css'
import {useEffect, useState} from "react";

import {estructuraModal, pasoEvento} from '../Utils/pasosEventos'
import { Bread_crumb } from "../../components/bread-crumb";
import { Status_bar } from "../../components/status-bar";
import { IEvento } from "../../core/models/database.model";

export default function Evento() {
    const [data, setData] = useState<IEvento>();
    const [n_pilotos, setPilotos] = useState<number>();
    const [isLoading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        setLoading(true)
        fetch(`/api/evento/${id}`)
            .then((res) => res.json())
            .then((obj) => {
                setData(obj.data[0])
                setPilotos(obj.n_pilotos)
                setLoading(false)
            })
    }, [])

    let configuracion = {
        esVisible: show,
        enCierre: handleClose
    }

    return (
        <div>
            <Bread_crumb 
                route={[{titleRoute:'eventos', url:'/', icon:'bi bi-calendar'}]} 
                title={data?data.nombre:'Cargando...'}                
            />
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
                            <Status_bar data={[
                                {title: 'Configuracion' , onClick: ()=>{console.log('Configuracion')}},
                                {title: 'Pilotos' , onClick: ()=>{console.log('Pilotos')}},
                                {title: 'Carreras' , onClick: ()=>{console.log('Carreras')}},
                                {title: 'Informes' , onClick: ()=>{console.log('Informes')}}
                            ]}
                            state={data!.estado} />
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="tarjetas col-4 pt-2 rounded-3">
                        <div className="card border-secondary mb-1">
                            <div className="card-header bg-secondary text-light border-secondary">Numero de pilotos</div>
                            <div className="card-body text-secondary">
                                {(n_pilotos)?Object.values(n_pilotos)[0]:'---'}
                            </div>  
                        </div>
                        <div className="card border-secondary mb-1">
                            <div className="card-header bg-secondary  text-light border-secondary">Numero de categorias</div>
                            <div className="card-body text-secondary">
                                <h3 className="card-title">---</h3>
                            </div>  
                        </div>
                        <div className="card border-secondary mb-1">
                            <div className="card-header bg-secondary text-light border-secondary">Numero de carreras</div>
                            <div className="card-body text-secondary">
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