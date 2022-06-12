import {useEffect, useState} from "react";
import List_group from "../../components/list-group";

export default function Event_list(){
    const [{ data, error, isLoading }, dispatch] = useState({
        data: [],
        error: null,
        isLoading: false
      });

    useEffect(() => {
        dispatch(state => ({ ...state, isLoading: true }));
        fetch('api/evento')
            .then((res) => res.json())
            .then((data) => {
                dispatch({ data, error: null, isLoading: false })
            })
            .catch(error => dispatch({ data: [], error, isLoading: false }));
    }, [])

    if (isLoading) return (<h1>Cargando...</h1>);
    if (error) return (<span>ERROR: {error}</span>);
    return (
        <div>
            <List_group data={data} /> 
        </div>
      )
}