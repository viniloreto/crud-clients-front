import React from 'react';

const Pagination = ({ clientsPerPage, totalClients, setCurrentPage, currentPage}) => {
    const pages = [];
    const pageNumber = Math.ceil( totalClients / clientsPerPage);

    for (let i = 1 ; i <= pageNumber ; i++) {
        pages.push(i);
    }

    const paginate = (number) => {
        setCurrentPage(number);
    }
    return (
        <div className="col-md-12">
            <ul className="pagination pagination-sm ">
                { currentPage > 1 ? (
                    <li className="page-item"> <button onClick={() => paginate(currentPage - 1)} className="page-link">Anterior</button></li>
                ) : null }
                {
                    pages.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : '' }`}>
   
                            <button onClick={() => paginate(number)} className="page-link">{number}</button>
                        </li>
                    ))
                }
                { currentPage < pages.length     ? (
                    <li className="page-item"> <button onClick={() => paginate(currentPage + 1)} className="page-link">Próxima</button></li>
                ) : null }
            </ul>
        </div>
    )
}

export default Pagination;