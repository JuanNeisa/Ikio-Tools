/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Accordion, Badge, Button } from "react-bootstrap";
import { deleteEvent } from "../../core/database/handlers/event/handler";
import { IEvento } from "../../core/models/database.model";

interface Props {
    data: any
}

export default function List_group(props: Props){
    return(
        <Accordion>
        { props.data.map((evento: IEvento) => {
            return (
                    <Accordion.Item key={evento.evento_id} eventKey={evento.evento_id.toString()}>
                        <Accordion.Header>{evento.nombre}</Accordion.Header>
                        <Accordion.Body>
                            {/* <div className="d-flex w-100 justify-content-between mb-2" >
                                <div>
                                    <Link  href={`/evento/${evento.evento_id}`}>
                                        <button type="button" className="btn btn-secondary btn-sm me-2">Abrir</button>
                                    </Link>
                                    <button type="button" className="btn btn-danger btn-sm me-2" onClick={() => deleteEvent(evento.evento_id)}>Eliminar</button>
                                </div>
                                <div className="badge bg-primary text-wrap">{evento.fecha}</div>
                            </div>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Ubicacion</span>
                                <input type="text" className="form-control" defaultValue={evento.ubicacion} disabled={true} />
                            </div>
                            <div className="input-group mb-1">
                                <span className="input-group-text" id="basic-addon1">Numero de pilotos</span>
                                <input type="number" className="form-control" defaultValue={evento.n_pilotos} disabled={true}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">Descripcion</span>
                                <textarea className="form-control" disabled={true} defaultValue = {evento.descripcion? evento.descripcion : 'Sin descripcion'}></textarea>
                            </div> */}
                            <div className="row">
                               <div className="col-3 border border-2 d-flex justify-content-center rounded-2">
                                    <img src="https://i.ytimg.com/vi/XhKrdGLlEdI/maxresdefault.jpg" className="img-fluid rounded" alt="..." />
                               </div>
                               <div className="col-9">
                                    <div className="row m-2">
                                            <span className="col-4 fw-bolder">Fecha</span>
                                            <span className="col-8">{evento.fecha}</span>
                                        </div>
                                    <div className="row m-2">
                                        <span className="col-4 fw-bolder">Nombre</span>
                                        <span className="col-8">{evento.nombre}</span>
                                    </div>
                                    <div className="row m-2">
                                        <span className="col-4 fw-bolder">Ubicacion</span>
                                        <span className="col-8">{evento.ubicacion}</span>
                                    </div>
                                    <div className="row m-2">
                                        <span className="col-4 fw-bolder">Descripcion</span>
                                        <span className="col-8">{evento.descripcion}</span>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <Link  href={`/evento/${evento.evento_id}`}>
                                            <button type="button" className="btn btn-secondary btn-sm me-2">Abrir</button>
                                        </Link>
                                        <button type="button" className="btn btn-danger btn-sm me-2" onClick={() => deleteEvent(evento.evento_id)}>Eliminar</button>
                                    </div>
                               </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
            )
        }) }
    </Accordion>
    );
}