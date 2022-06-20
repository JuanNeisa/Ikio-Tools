import React from "react";

export default function InputArea() {
    return(
        <div className="drag-area p-3">
             <span className="fw-bold">Arrastra y suelta archivo CSV</span>
             <span>O</span>
             <input className="form-control mt-3" style={{maxWidth:'50%'}} type="file"/>
        </div>
    )
}