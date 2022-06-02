export enum pasoEvento {
    CONFIGURACION = 'configuracion',
    INSC_PILOTOS = 'inscripcion-pilotos',
    CARRERAS = 'carreras',
    GENERACION_INFORMES = 'generacion-informes'
}

export const estructuraModal = function (evento:pasoEvento) {
    switch(evento){
        case pasoEvento.INSC_PILOTOS:
            return (
                <>
                    <span>Cargue a continuacion la informacion de todos los pilotos en formato CSV.</span>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button">Subir</button>
                        <input type="file" className="form-control"/>
                    </div>
                </>);
            break;
        case pasoEvento.CARRERAS:
            break;
        case pasoEvento.GENERACION_INFORMES:
            break;
        default:
            return(
                <></>
            )
            break;
    }
}

export {}