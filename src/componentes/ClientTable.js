import React from 'react';
import ClientService from '../services/clientService'

const ClientsTable = ({ clients, openModal}) => {

  const deleteClient = async (id) => {
    await ClientService.deleteClient(id);
    openModal(false);
  }

    return (
        <div>
        <table className="table table-striped">
        <thead>
              <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>CPF</th>
                  <th>E-mail</th>
                  <th>País</th>
                  <th className="actions">Ações</th>
               </tr>
          </thead>
          <tbody>
            {
              clients.map( client => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.age}</td>
                  <td>{client.cpf}</td>
                  <td>{client.email}</td>
                  <td>{client.country}</td>
                  <td>
                          <button onClick={() => openModal(true, client)} className="btn btn-warning btn-xs">Editar</button>
                          <button onClick={() => deleteClient(client.id)} className="btn btn-danger btn-xs">Excluir</button>
                  </td>
                </tr>
              ) )
            }
          </tbody>
        </table>
      </div>
    )
}

export default ClientsTable