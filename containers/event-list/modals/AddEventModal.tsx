import { useState } from "react"
import { IEvento } from "../../../core/models/database.model"
import { addEvent } from "../../../core/database/handlers/event/handler"

export function AddEventModal () {
    const [data, setData] = useState({
        fecha: '',
        nombre: '',
        ubicacion: '',
        descripcion: ''
    })

    const handleInputChange = (event:any) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }   

    const sendData = (event:any) => {
        addEvent(data as IEvento)
    }

    return(
            <form className="d-flex align-items-center flex-column" onSubmit={sendData}>
                <div className="input-group mb-1">
                    <span className="input-group-text" id="basic-addon1">Fecha</span>
                    <input type="date" className="form-control" name="fecha" onChange={handleInputChange}/>
                </div>
                <div className="input-group mb-1">
                    <span className="input-group-text" id="basic-addon1">Nombre</span>
                    <input type="text" className="form-control" name="nombre" onChange={handleInputChange}/>
                </div>
                <div className="input-group mb-1">
                    <span className="input-group-text" id="basic-addon1">Ubicacion</span>
                    <input type="text" className="form-control" name="ubicacion" onChange={handleInputChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-text">Descripcion</span>
                    <textarea className="form-control" name="descripcion" onChange={handleInputChange}></textarea>
                </div>
                <div className='d-flex justify-content-end container-fluid'>
                    <button type="submit" className="btn btn-success ms-2 mt-2">Agregar</button>
                </div>
            </form>)
}