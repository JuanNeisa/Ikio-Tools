export default function Test(){
    return (
        <div className="border border-1">
            <div className="input-group mb-1">
                <span className="input-group-text" id="basic-addon1">Fecha</span>
                <input type="date" className="form-control" />
            </div>
            <div className="input-group mb-1">
                <span className="input-group-text" id="basic-addon1">Nombre</span>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group mb-1">
                <span className="input-group-text" id="basic-addon1">Ubicacion</span>
                <input type="text" className="form-control" />
            </div>
            <div className="input-group">
                <span className="input-group-text">Descripcion</span>
                <textarea className="form-control"></textarea>
            </div>
        </div>
    )
}