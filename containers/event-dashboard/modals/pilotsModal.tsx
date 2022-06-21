import { useState } from "react";
import InputArea from "../../../components/input-area";

export function PilotsModal () {
    let validExtensions = ["text/csv"];
    const [data, setData] = useState({
        file: ''
    })

    const handleInputChange = (file:any) => {
       let fileReader = new FileReader();
       fileReader.onload = () => {
        let fileURL = fileReader.result;
        console.log(fileURL)
       }
       fileReader.readAsDataURL(file);
        setData({
            ...data,
            file
        })
    }

    return(
        <InputArea 
            fileHandler={handleInputChange} 
            acceptTypes= {validExtensions}
        />
    )
}