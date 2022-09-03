import { IEvento } from "../../core/models/database.model";
import { EventDashboard_Header } from "./event-dashboard.header";

interface Props {
    data: IEvento
}

export function EventDashboard(props: Props) {
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
                                <h5 className="card-title">Configuracion</h5>
                                <button type="button" className="btn btn-secondary align-content-end">Editar</button>
                            </div>
                        </div>
                        <div className="card border-secondary mb-1">
                            <div className="card-body text-secondary d-flex flex-column">
                                <h5 className="card-title">Pilotos</h5>
                                <button type="button" className="btn btn-secondary align-content-end">Cargar</button>
                            </div>
                        </div>
                        <div className="card border-secondary mb-1">
                            <div className="card-body text-secondary d-flex flex-column">
                                <h5 className="card-title">Carreras</h5>
                                <button type="button" className="btn btn-secondary align-content-end">Cargar</button>
                            </div>
                        </div>
                        <div className="card border-secondary mb-1">
                            <div className="card-body text-secondary d-flex flex-column">
                                <h5 className="card-title">Informes</h5>
                                <button type="button" className="btn btn-secondary align-content-end disabled">Generar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}