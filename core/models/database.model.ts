export interface IEvento {
    evento_id : number,
    nombre: string,
    ubicacion: string,
    descripcion?: string,
    fecha: string,
    estado: number,
    n_pilotos?: number
}