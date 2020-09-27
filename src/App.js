import React, { useState, useEffect } from 'react';
import './style/style.css';
import ClientService from './services/clientService';

import ClientsTable from './componentes/ClientTable';
import ModalForm from './componentes/ModalForm';
import Pagination from './componentes/Pagination';

export default function App() {
  const [ clients, setClients ] = useState([]);
  const [ totalClients, setTotalClients ] = useState(0);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ client, setClient ] = useState({});
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ limit, setLimit ] = useState(5);

  useEffect(() => {
    const fetchClients = async () => {      
      const response = await ClientService.getClients(currentPage, limit);
      setClients(response.clients ? response.clients : []);
      setTotalClients(response.totalClients ? response.totalClients : null)
    }
    fetchClients();
  }, [currentPage, client, limit]);

  function openModal(boolean = true, object = {}) {
    setIsModalVisible(boolean);
    setClient(object);
  }

  return (
  <div className="paddingContent">
    <ClientsTable clients={clients} openModal={openModal}/>
    <div className="row pag">
      <Pagination clientsPerPage={limit} totalClients={totalClients} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      <button onClick={openModal} className="btn btn-primary"> novo item </button>
    </div>

    {isModalVisible ? <ModalForm data={client} closeModal={() => setIsModalVisible(false)} att={setClient}/> : null}

  </div>
  )
}
