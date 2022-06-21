import React from "react";

interface Props {
    fileHandler: any,
    acceptTypes: string[]
}

export default function InputArea(props: Props) {

    const validateFile = (file: any): boolean => {
        if(file && props.acceptTypes.includes(file.type)){
            props.fileHandler(file)
            return true
        }else {
            return false
        }
    }

    const handleDragOver = (e:any) => {
        e.preventDefault()
        const header = document.getElementById('dragAreaHeader') as HTMLElement
        const dragArea = document.getElementById('drag-area') as HTMLElement
        switch(e.type){
            case "click":
                const inputFile = document.getElementById('inputFile') as HTMLElement
                inputFile?.click()
                dragArea.classList.add('active')
                break;
            case "change":
                dragArea.classList.add(validateFile(e.target.files[0])?'success':'failed')
                dragArea.classList.remove(!validateFile(e.target.files[0])?'success':'failed')
                break;
            case "dragover":
                header.textContent = 'Libera y carga el archivo'
                dragArea.classList.add('active')
                break;
            case "dragleave":
                header.textContent = 'Arrastra y suelta archivos CSV'
                dragArea.classList.remove('active')
                break;
            case "drop":
                dragArea.classList.add(validateFile(e.dataTransfer.files[0])?'success':'failed')
                dragArea.classList.remove(!validateFile(e.dataTransfer.files[0])?'success':'failed')
            default:
                break;
        }
    }

    return(
        <form onSubmit={handleDragOver}>
            <div id="drag-area" className="drag-area p-3" onDragOver={handleDragOver} onDragLeave={handleDragOver} onDrop={handleDragOver}>
                <header id="dragAreaHeader" className="fw-bold">Arrastra y suelta archivos CSV</header>
                <span>O</span>
                <button className="btn btn-secondary mt-2" onClick={handleDragOver}>Elige tu archivo</button>
                <input id="inputFile" type="file" accept={props.acceptTypes.join()} onChange={handleDragOver} hidden/>
            </div>
        </form>
    )
}