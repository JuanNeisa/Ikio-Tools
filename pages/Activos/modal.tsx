import Modal from 'react-bootstrap/Modal';

interface props {
    titulo: string,
    cuerpo: any,
    piePag?: any
    configuracion: configuracion | any
}

interface configuracion {
    esVisible?: boolean,
    enCierre?: any
}

export default function ModalWindow({titulo, cuerpo, piePag, configuracion}: props) {
    return(
        <div>
            <Modal show={configuracion.esVisible} onHide={configuracion.enCierre}>
                <Modal.Header closeButton>
                    <Modal.Title>{titulo}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {cuerpo}
                </Modal.Body>

                {piePag && 
                <Modal.Footer>
                    {piePag}
                </Modal.Footer>}
            </Modal>
        </div>
    );
} 