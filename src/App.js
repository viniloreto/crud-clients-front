import React, { useState, useEffect } from 'react';
import './style/style.css';
import ClientService from './services/clientService';

import ClientsTable from './componentes/ClientTable';
import ModalForm from './componentes/ModalForm';
import Pagination from './componentes/Pagination';
import ConfirmationModal from './componentes/ConfirmationModal';


export default function App() {
  const [ clients, setClients ] = useState([]);
  const [ totalClients, setTotalClients ] = useState(0);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ client, setClient ] = useState({});
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ limit, setLimit ] = useState(5);
  const [ inputValue, setInputValue ] = useState(null);
  const [ confModalVisible, setConfModalVisible ] = useState(false)
  const [ clientToDelete, setClientToDelete ] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {      
      const response = await ClientService.getClients({currentPage, limit});
      setClients(response.clients ? response.clients : []);
      setTotalClients(response.totalClients ? response.totalClients : null)
    }
    fetchClients();
  }, [currentPage, client, limit]);

  function openModal(boolean = true, object = {}) {
    setIsModalVisible(boolean);
    setClient(object);
  }

  async function searchClients() {
    if(inputValue) {
      const data = await ClientService.getClients({currentPage, limit, inputValue})
      setClients(data.clients ? data.clients : []);
      setTotalClients(data.totalClients ? data.totalClients : null)
    } else {
      setClient({})
    }
  }

  function confirmationModal(id) {
    setConfModalVisible(true);
    setClientToDelete(id)
  }

  return (
    <div >
      <nav className="navbars">
        <a href="https://www.linkedin.com/in/viniciusloreto/">Vinicius Loreto Ferreira</a>
      </nav>

      <hr/>

      <div className="container-fluid mag fsize">
        <div id="top" className="row">
          <div className="col-sm-3">
         </div>

          <div className="col-sm-6">
            <div className="input-group h2">
              <input  className="form-control" type="text" onChange={(e) => setInputValue(e.target.value)} placeholder="Pesquisar Clientes pelo NOME"></input>
              
              <button className="btn btn-secondary btn-sm" type="submit" onClick={() => searchClients('vini')}>
                <span> Pesquisar</span>
              </button>
				      
            </div>
          </div>
          <div className="col-sm-3">
            <button onClick={openModal} className="btn btn-secondary bton btn-md"> Adicionar Cliente </button>
          </div>
        </div>

        <hr/>

        <ClientsTable clients={clients} delCliente={() => {setClientToDelete()}} openModal={openModal} confiModal={confirmationModal}/>

        <div className="row">
          <Pagination clientsPerPage={limit} totalClients={totalClients} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>

        {isModalVisible ? <ModalForm data={client} closeModal={() => setIsModalVisible(false)} att={setClient}/> : null}
        {confModalVisible ? <ConfirmationModal delId={clientToDelete} confirmationModal={() => setConfModalVisible(false)} att={setClient} /> : null }
      </div>
    </div>
  )
}

