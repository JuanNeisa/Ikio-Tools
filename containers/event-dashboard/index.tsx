import { useState } from "react";
import Modal_box from "../../components/modal";
import { IEvento } from "../../core/models/database.model";
import { EventDashboard_Header } from "./event-dashboard.header";
import { PilotsModal } from "./modals/pilotsModal";

interface Props {
    data: IEvento
}

export function EventDashboard(props: Props) {
    const [showPilotsModal, setShowPilotModal] = useState(false);
    
    return(
        <>
            <div className="container">
                <EventDashboard_Header data={props.data} />
            </div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-4">
                        <div className="card border-secondary mb-1">
                            <div className="card-body text-secondary d-flex flex-column">
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">Configuracion</h5>
                                    <i className="bi bi-check-lg" style={{color: 'green'}}></i>
                                </div>
                                <button type="button" className="btn btn-secondary align-content-end">Editar</button>
                            </div>
                        </div>
                        <div className="card border-secondary mb-1">
                            <div className="card-body text-secondary d-flex flex-column">
                            <div className="d-flex justify-content-between">
                                    <h5 className="card-title">Pilotos</h5>
                                    <i className="bi bi-x-lg" style={{color: 'red'}}></i>
                                </div>
                                <button type="button" 
                                        className="btn btn-secondary align-content-end"
                                        onClick={() => {setShowPilotModal(true)}}>Cargar</button>
                            </div>
                        </div>
                        <div className="card border-secondary mb-1">
                            <div className="card-body text-secondary d-flex flex-column">
                            <div className="d-flex justify-content-between">
                                    <h5 className="card-title">Carreras</h5>
                                    <i className="bi bi-x-lg" style={{color: 'red'}}></i>
                                </div>
                                <button type="button" className="btn btn-secondary align-content-end">Cargar</button>
                            </div>
                        </div>
                        <div className="card border-secondary mb-1">
                            <div className="card-body text-secondary d-flex flex-column">
                            <div className="d-flex justify-content-between">
                                    <h5 className="card-title">Informes</h5>
                                    <i className="bi bi-x-lg" style={{color: 'red'}}></i>
                                </div>
                                <button type="button" className="btn btn-secondary align-content-end disabled">Generar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal_box 
                title={"Agregar pilotos"} 
                body={<PilotsModal />} 
                isShow={showPilotsModal} 
                onClose={() => setShowPilotModal(false)} />
        </>
    )
}