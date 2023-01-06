import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    margin-top: 3rem;

    p {
        color: grey;
    }

    div{
        display: flex;
    }
`;

export const Paginador = ({limit, elementList, currentPage, setCurrentPage}) => {

    const pageNumbers = [];

    const totalPages = () => {
        return Math.ceil(elementList / limit)
    }

    for (let i = 1; i <= totalPages(); i++) {
        pageNumbers.push(i)
    }

    return(
        <Div>
            <p>Showing {currentPage} of {totalPages()} pages</p>

            <div>
                {currentPage <= 1 ? '' :<button onClick={() => setCurrentPage(currentPage - 1)}>
                    Prev
                </button>}

                {
                    pageNumbers.map((noPage, i) => 
                        //<p key={i}>{noPage}</p>
                        <button key={i} onClick={() => setCurrentPage(noPage)}>{noPage}</button>
                    )
                }

                {currentPage === totalPages() ? '' : <button onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </button>}
            </div>
        </Div>
    )
}