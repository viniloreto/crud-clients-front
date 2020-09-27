import React from 'react';

const ClientsTable = ({ clients, openModal, confiModal }) => {

    return (      
      <div id="list" className="row">
        <div className="table-responsive col-md-12">
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
                            <button onClick={() => confiModal(client.id)} className="btn btn-danger btn-xs">Excluir</button>
                    </td>
                  </tr>
                ) )
              }
            </tbody>
          </table>
        </div>
      </div>
      
    )
}

export default ClientsTable