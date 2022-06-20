import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import ReactDOM from 'react-dom';

interface Props {
    title: string,
    body: any,
    footer?: any,
    isShow: boolean
    onClose: any
}

export default function Modal_box(props: Props) {  
    const [isBrowser, setIsBrowser] = useState(false);
    
    useEffect(() => {
        setIsBrowser(true);
    },[]);

    const handleClose = () => {
        props.onClose();
    }

    const modalContent = props.isShow ? (
            <Modal
            size="lg" 
            show={props.isShow} 
            onHide={handleClose}
            centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.body}
                </Modal.Body>
            </Modal>
        ) : null;
    
        if(isBrowser) {
            return ReactDOM.createPortal(
                modalContent,
                document.getElementById('modal-root')!
            )
        } else {
            return null
        }
}