import * as _ from "lodash";
import { IEvento } from "../../core/models/database.model"

interface Props {
    data: IEvento
}

export function EventDashboard_Header(props: Props) {
    return(
        <div className="border border-3 p-4 rounded-3">
            <div className="d-flex justify-content-between align-content-center">
                <h4>Informacion</h4>
                <i className="bi bi-info-square me-2" 
                   style={{fontSize: '25px'}}></i>
            </div>
            <div className="row m-2">
                <span className="col-4 fw-bolder">Fecha</span>
                <span className="col-8">{props.data?.fecha}</span>
            </div>
            <div className="row m-2">
                <span className="col-4 fw-bolder">Nombre</span>
                <span className="col-8">{props.data?.nombre}</span>
            </div>
            <div className="row m-2">
                <span className="col-4 fw-bolder">Ubicacion</span>
                <span className="col-8">{props.data?.ubicacion}</span>
            </div>
            <div className="row m-2">
                <span className="col-4 fw-bolder">Descripcion</span>
                <span className="col-8">{(!_.isNil(props.data))?props.data.descripcion:'Sin descripcion'}</span>
            </div>
        </div>
    )
}