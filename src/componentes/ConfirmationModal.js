import React from 'react'
import ClientService from '../services/clientService';


const ConfirmationModal = ({confirmationModal = {}, att= {}, delId }) => {
    
    const closeModalByClick = (e) => {
        if( e.target.id === "modal") {
            confirmationModal();
        }
     }
    
    const deleteClient = async () => {
        await ClientService.deleteClient(delId);
        att([]);
        confirmationModal();
    }

    return (
        <div id="modal" className="ModalForm" onClick={closeModalByClick}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title position-title" >Excluir Item</h4>
                </div>
                <div className="modal-body">
                    Deseja realmente excluir este item?
                </div>
                <div className="modal-footer">
                    <button type="button"onClick={() => deleteClient()} className="btn btn-primary">Sim</button>
                <button type="button" onClick={confirmationModal} className="btn btn-default">N&atilde;o</button>
                </div>
                </div>
            </div>
        </div>
    )
} 

export default ConfirmationModal;
