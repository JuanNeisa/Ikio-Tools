import * as _ from "lodash";
import { useState } from "react";
import Modal_box from "../../components/modal";
import { Status_bar } from "../../components/status-bar"
import { IEvento } from "../../core/models/database.model"
import { PilotsModal } from "./modals/pilotsModal";

interface Props {
    data: IEvento
}

export function EventDashboard_Header(props: Props) {
    const [showPilotsModal, setShowPilotModal] = useState(false);
    return(
        <div className="border border-3 p-4 rounded-3">
            <h4><i className="bi bi-info-square me-2"></i>Informacion</h4>
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
            <div className="row m-2 ">
                <span className="col-4 fw-bolder ">Status</span>
                <div className="col-8">
                    { props.data &&
                        <Status_bar data={[
                            {title: 'Configuracion' , onClick: ()=>{console.log('Configuracion')}},
                            {title: 'Pilotos' , onClick: () => {setShowPilotModal(true)}},
                            {title: 'Carreras' , onClick: ()=>{console.log('Carreras')}},
                            {title: 'Informes' , onClick: ()=>{console.log('Informes')}}
                        ]}
                        state={props.data.estado} />
                    }
                </div>
            </div>
            <Modal_box 
                title={"Agregar piloto"} 
                body={<PilotsModal />} 
                isShow={showPilotsModal} 
                onClose={() => setShowPilotModal(false)} />
        </div>
    )
}