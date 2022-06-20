import { useState } from "react";
import InputArea from "../../../components/input-area";

export function PilotsModal () {
    const [data, setData] = useState({
        file: ''
    })

    const handleInputChange = (event:any) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    return(
        <form action="">
            <InputArea></InputArea>
        </form>
    )
}