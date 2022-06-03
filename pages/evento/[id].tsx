import {useRouter} from "next/router";
import '../../styles/evento.module.css'
import {useEffect, useState} from "react";

import { Bread_crumb } from "../../components/bread-crumb";
import { IEvento } from "../../core/models/database.model";
import { EventDashboard } from "../../containers/event-dashboard";

export default function Evento() {
    const [data, setData] = useState<IEvento>();
    const [{error, isLoading }, dispatch] = useState({
        error: null,
        isLoading: false
      });

    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        dispatch(state => ({ ...state, isLoading: true }));
        fetch(`/api/evento/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                dispatch({ error: null, isLoading: false })
            })
            .catch(error => dispatch({ error, isLoading: false }));
    }, [id])

    return (
        <div>
            <div className="p-2">
                <Bread_crumb 
                    route={[{titleRoute:'eventos', url:'/', icon:'bi bi-calendar'}]} 
                    title={data?data.nombre:'Cargando...'}
                />
            </div>
            <EventDashboard data={data!}/>
        </div>
    )
}